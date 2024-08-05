import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import styles from './test.module.css';

const questions: {
  id: number;
  question_number: string;
  question_content: string;
  answer_list: string[];
  true_answer: number;
  question_img: string;
}[] = [
  {
    id: 1,
    question_number: "Вопрос №1, Билет №1",
    question_img: "/img/Ticket-1/question-1.png",
    question_content: "В каком случае водитель совершит вынужденую остановку?",
    answer_list: [
      "1.Остановившись непосредственно перед пешеходным переходом, чтобы уступить дорогу пешеходу",
      "2.Остановившись на проезжей части из-за технической неисправности транспортного средства",
      "3.В обоих перечисленных случаях"
    ],
    true_answer: 2,
  },
];

const Test: React.FC = () => {
  const [selectedAnswer, setSelectedAnswer] = useState<(number | null)[]>(Array(questions.length).fill(null));
  const [submitted, setSubmitted] = useState<boolean[]>(Array(questions.length).fill(false));
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [correctAnswers, setCorrectAnswers] = useState(0);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 минут в секундах
  const router = useRouter();

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => {
        if (prevTime <= 1) {
          clearInterval(timer);
          router.push(`/results?correctAnswers=${correctAnswers}`);
          return 0;
        }
        return prevTime - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [correctAnswers, router]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const checkAnswer = (questionIndex: number, answer: number): string => {
    if (!submitted[questionIndex]) return '';
    if (answer === questions[questionIndex].true_answer) return styles.true_answer;
    if (selectedAnswer[questionIndex] === answer) return styles.wrongAnswer;
    return '';
  };

  const handleSubmit = () => {
    if (!submitted[currentQuestion]) {
      const updatedSubmitted = [...submitted];
      updatedSubmitted[currentQuestion] = true;
      setSubmitted(updatedSubmitted);

      if (selectedAnswer[currentQuestion] === questions[currentQuestion].true_answer) {
        setCorrectAnswers(prev => prev + 1);
      }

      if (currentQuestion === questions.length - 1) {
        router.push(`/results?correctAnswers=${correctAnswers + (selectedAnswer[currentQuestion] === questions[currentQuestion].true_answer ? 1 : 0)}`);
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

  const handleQuestionSelect = (index: number) => {
    setCurrentQuestion(index);
  };

  return (
    <div className={styles.test}>
      <div className={styles.test_main}>
        <div className={styles.test_title}>{questions[currentQuestion].question_content}</div>
        <div className={styles.test_image}>
          <Image
            src={questions[currentQuestion].question_img}
            alt="SDS"
            width={800}
            height={400}
          />
        </div>
        <h1 className={styles.test_question}>{questions[currentQuestion].question_number}</h1>
        <div className={styles.timer}>Оставшееся время: {formatTime(timeLeft)}</div>
      </div>
      <div className={styles.test_answer}>
        <ul className={styles.checkboxes}>
          <h1 className={styles.checkbox_title}>Выберите вариант ответа:</h1>
          {questions[currentQuestion].answer_list.map((option, index) => (
            <li key={index} className={`${styles.checkbox} ${selectedAnswer[currentQuestion] === index + 1 ? checkAnswer(currentQuestion, index + 1) : ''}`}>
              <input
                type="radio"
                id={`rb${currentQuestion}_${index + 1}`}
                name={`question_number${currentQuestion}`}
                onChange={() => setSelectedAnswer(prev => {
                  const updated = [...prev];
                  updated[currentQuestion] = index + 1;
                  return updated;
                })}
                disabled={submitted[currentQuestion]}
                checked={selectedAnswer[currentQuestion] === index + 1}
              />
              <label htmlFor={`rb${currentQuestion}_${index + 1}`}>{option}</label>
            </li>
          ))}
          {submitted[currentQuestion] && (
            <li className={`${styles.checkbox} ${styles.true_answer}`}>
              {questions[currentQuestion].answer_list[questions[currentQuestion].true_answer - 1]}
            </li>
          )}
        </ul>
        <div className={styles.test_btns}>
          <button className={styles.test_btn} onClick={handlePrev} disabled={currentQuestion === 0}>Назад</button>
          <button className={styles.test_btn} onClick={handleSubmit}>Ответить</button>
          <button className={styles.test_btn} onClick={handleNext} disabled={currentQuestion === questions.length - 1}>Далее</button>
        </div>
        <div className={styles.navigation}>
          {questions.map((_, index) => (
            <button
              key={index}
              className={`
                ${styles.nav_btn} 
                ${submitted[index] ? (selectedAnswer[index] === questions[index].true_answer ? styles.true_answer : styles.wrongAnswer) : ''}
              `}
              onClick={() => handleQuestionSelect(index)}
            >
              {index + 1}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Test;
