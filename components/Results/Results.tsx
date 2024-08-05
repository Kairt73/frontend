import { useRouter } from 'next/router';
import Link from 'next/link';
import styles from './style.module.css';

function useQuery() {
  const router = useRouter();
  return new URLSearchParams(router.query as any);
}

const Results: React.FC = () => {
  const query = useQuery();
  const correctAnswers = parseInt(query.get("correctAnswers") || "0", 10);

  let resultContent;

  switch (true) {
    case correctAnswers <= 5:
      resultContent = <p>Может вам стоит лучше выучить правила?</p>;
      break;
    case correctAnswers <= 10:
      resultContent = <p>Может вам стоит ещё попрактиковаться?</p>;
      break;
    case correctAnswers <= 17:
      resultContent = <p>Не плохой результат, но может попробовать ещё раз?</p>;
      break;
    case correctAnswers <= 20:
      resultContent = <p>Поздравляю, вы отлично сдали!</p>;
      break;
    default:
      resultContent = <p>Произошла ошибка, попробуйте еще раз.</p>;
  }

  return (
    <section className={styles.container}>
      <div className={styles.resultStatus}>
        <h1 className={styles.resultsHeadline}>Вы сдали {correctAnswers} из 20</h1>
        {resultContent}
        <div className={styles.buttonsWrap}>
          <Link href="/" passHref>
            <a className={styles.buttons}>На главную</a>
          </Link>
          <Link href="/tickets" passHref>
            <a className={styles.buttons}>Пересдать</a>
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Results;
