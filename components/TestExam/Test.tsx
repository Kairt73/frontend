'use client';

import { useSearchParams } from 'next/navigation';
import React, { useState, useEffect, Suspense } from 'react';
import Image from 'next/image';
import styles from './test.module.css';

interface Question {
  id: number;
  question_number: string;
  question_content: string;
  answer_list: string[];
  true_answer: number;
  question_img: string;
}

const Test: React.FC = () => {
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
          alert(`Время вышло! Правильные ответы: ${correctAnswers} из ${questions.length}`);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [correctAnswers, questions.length]);

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

  const handleAnswerClick = (index: number) => {
    if (!submitted[currentQuestion]) {
      const updatedAnswers = [...selectedAnswer];
      updatedAnswers[currentQuestion] = index;
      setSelectedAnswer(updatedAnswers);
    }
  };

  return (
    <div className={styles.test}>
      <div className={styles.test_main}>
        <div className={styles.test_image}>
          {questions[currentQuestion]?.question_img && (
            <Image
              src={questions[currentQuestion].question_img}
              alt="Question"
              width={800}
              height={400}
            />
          )}
        </div>
        <div className={styles.test_title}>{questions[currentQuestion]?.question_content}</div>
        <h1 className={styles.test_question}>{questions[currentQuestion]?.question_number}</h1>
        <div className={styles.timer}>Оставшееся время: {formatTime(timeLeft)}</div>
      </div>
      <div className={styles.test_answer}>
        {questions[currentQuestion]?.answer_list.map((answer, index) => (
          <div
            key={index}
            className={`${styles.checkbox} ${checkAnswer(currentQuestion, index)}`}
            onClick={() => handleAnswerClick(index)}
          >
            {answer}
          </div>
        ))}
      </div>
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
            className={`${styles.nav_btn} ${currentQuestion === index ? styles.active : ''}`}
            onClick={() => setCurrentQuestion(index)}
          >
            {index + 1}
          </button>
        ))}
      </div>
      <div className={styles.result}>
        {timeLeft <= 0 && (
          <div className={styles.result_message}>
            Время вышло! Правильные ответы: {correctAnswers} из {questions.length}
          </div>
        )}
      </div>
    </div>
  );
};

const TestWrapper: React.FC = () => (
  <Suspense fallback={<div>Загрузка...</div>}>
    <Test />
  </Suspense>
);

export default TestWrapper;
