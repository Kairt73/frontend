'use client';

import { useRouter } from 'next/navigation';
import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import styles from './test.module.css';

export interface Question {
  id: number;
  question_number: string;
  question_content: string;
  answer_list: string; // Это теперь строка
  true_answer: number;
  question_img: string;
}

const Test: React.FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [questions, setQuestions] = useState<Question[]>([]);
  const [selectedAnswer, setSelectedAnswer] = useState<(number | null)[]>([]);
  const [submitted, setSubmitted] = useState<boolean[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 минут

  useEffect(() => {
    const ticketId = searchParams.get('ticketId');

    const fetchQuestions = async () => {
      try {
        const response = await fetch(`http://localhost:8080/api/question_list?ticket_id=${ticketId}`);
        const data = await response.json();
        if (data.success) {
          setQuestions(data.question_list);
          setSelectedAnswer(new Array(data.question_list.length).fill(null));
          setSubmitted(new Array(data.question_list.length).fill(false));
        }
      } catch (error) {
        console.error("Failed to fetch questions:", error);
      }
    };
    fetchQuestions();
  }, [searchParams]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        if (prevTime <= 1) {
          clearInterval(timer);
          // Перенаправление на страницу результатов после окончания времени
          router.push(`/results?correctAnswers=${correctAnswers}&totalQuestions=${questions.length}`);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [correctAnswers, questions.length, router]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const checkAnswer = (questionIndex: number, answer: number): string => {
    if (!submitted[questionIndex]) return '';
    return answer === questions[questionIndex].true_answer
      ? styles.true_answer
      : selectedAnswer[questionIndex] === answer
      ? styles.wrongAnswer
      : '';
  };

  const handleSubmit = () => {
    if (!submitted[currentQuestion]) {
      const updatedSubmitted = [...submitted];
      updatedSubmitted[currentQuestion] = true;
      setSubmitted(updatedSubmitted);

      if (selectedAnswer[currentQuestion] === questions[currentQuestion].true_answer) {
        setCorrectAnswers((prev) => prev + 1);
      }
    }
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleAnswerChange = (index: number) => {
    if (!submitted[currentQuestion]) {
      const updatedAnswers = [...selectedAnswer];
      updatedAnswers[currentQuestion] = index;
      setSelectedAnswer(updatedAnswers);
    }
  };

  // Разбираем строку с ответами на массив
  const parseAnswers = (answerList: string) => {
    return answerList.split(',').map(answer => answer.trim());
  };

  const getButtonStyle = (questionIndex: number, answerIndex: number): string => {
    if (submitted[questionIndex]) {
      return answerIndex === questions[questionIndex].true_answer
        ? styles.trueAnswerButton
        : selectedAnswer[questionIndex] === answerIndex
        ? styles.wrongAnswerButton
        : '';
    }
    return '';
  };

  return (
    <div className={styles.test}>
      <div className={styles.test_main}>
        <div className={styles.test_image}>
          {questions[currentQuestion]?.question_img && (
            <Image
              src={questions[currentQuestion].question_img}
              alt="Question"
              width={600}
              height={300}
            />
          )}
        </div>
        <div className={styles.test_title}>{questions[currentQuestion]?.question_content}</div>
        <h1 className={styles.test_question}>{questions[currentQuestion]?.question_number}</h1>
        <div className={styles.timer}>Оставшееся время: {formatTime(timeLeft)}</div>
      </div>
      {
        questions[currentQuestion] && (
          <div className={styles.answers}>
            {parseAnswers(questions[currentQuestion].answer_list).map((answer, index) => (
              <div key={index} className={styles.answer_radio}>
                <input
                  type="radio"
                  id={`answer_${index}`}
                  name={`question_${currentQuestion}`}
                  value={index}
                  checked={selectedAnswer[currentQuestion] === index}
                  onChange={() => handleAnswerChange(index)}
                  disabled={submitted[currentQuestion]}
                />
                <label
                  htmlFor={`answer_${index}`}
                  className={`${checkAnswer(currentQuestion, index)} ${getButtonStyle(currentQuestion, index)}`}
                >
                  {answer}
                </label>
              </div>
            ))}
          </div>
        )
      }
      <div className={styles.test_btns}>
        <button
          className={styles.test_btn}
          onClick={handlePrev}
          disabled={currentQuestion === 0}
        >
          Предыдущий вопрос
        </button>
        <button
          className={styles.test_btn}
          onClick={handleSubmit}
        >
          Ответить
        </button>
        <button
          className={styles.test_btn}
          onClick={handleNext}
          disabled={currentQuestion === questions.length - 1}
        >
          Следующий вопрос
        </button>
      </div>
      <div className={styles.navigation}>
        {questions.map((_, index) => (
          <button
            key={index}
            className={`${styles.nav_btn} ${currentQuestion === index ? styles.active : ''} ${submitted[index] && (questions[index].true_answer === selectedAnswer[index] ? styles.correctButton : styles.incorrectButton)}`}
            onClick={() => setCurrentQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Test;
