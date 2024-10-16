'use client';
import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './results.module.css';

interface ResultsProps {
  correctAnswers: string; // Укажите тип для correctAnswers
}

const Results: React.FC<ResultsProps> = ({ correctAnswers }) => {
  const correctAnswer = parseInt(correctAnswers, 10);

  let resultContent;

  switch (true) {
    case correctAnswer <= 5:
      resultContent = <p>Может вам стоит лучше выучить правила?</p>;
      break;
    case correctAnswer <= 10:
      resultContent = <p>Может вам стоит ещё попрактиковаться?</p>;
      break;
    case correctAnswer <= 17:
      resultContent = <p>Неплохой результат, но может попробовать ещё раз?</p>;
      break;
    case correctAnswer <= 20:
      resultContent = <p>Поздравляю, вы отлично сдали!</p>;
      break;
    default:
      resultContent = <p>Произошла ошибка, попробуйте еще раз.</p>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.resultStatus}>
        <h1 className={styles.resultsHeadline}>Вы сдали {correctAnswer} из 20</h1>
        {resultContent}
        <div className={styles.buttonsWrap}>
          <Link href="/" className={styles.buttons}>
            На главную
          </Link>
          <Link href="/TicketPage" className={styles.buttons}>
            Пересдать
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Results;
