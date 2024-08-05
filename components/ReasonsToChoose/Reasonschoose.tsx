import Image from 'next/image';
import styles from './reasonschoose.module.css';

const Reasonschoose: React.FC = () => {
  return (
    <div id='aboutus' className={styles.choose_reasons}>
      <h1 className={styles.choose_title}>
        Причины выбрать именно нас:
      </h1>
      <div className={styles.choose_images}>
        <div className={styles.choose_image}>
          <Image src="/img/Instructor 1.png" alt="SDS" width={400} height={247.5} />
          <p className={styles.choose_text}>Опытные инструктора</p>
        </div>
        <div className={styles.choose_image}>
          <Image src="/img/Pay 1.png" alt="SDS" width={400} height={247.5} />
          <p className={styles.choose_text}>Доступные цены</p>
        </div>
        <div className={styles.choose_image}>
          <Image src="/img/Cooke 1.png" alt="SDS" width={400} height={247.5} />
          <p className={styles.choose_text}>Доброжелательное отношение к студентам</p>
        </div>
        <div className={styles.choose_image}>
          <Image src="/img/Role 1.png" alt="SDS" width={400} height={247.5} />
          <p className={styles.choose_text}>Современные методы обучения</p>
        </div>
        <div className={styles.choose_image}>
          <Image src="/img/image 6.png" alt="SDS" width={400} height={247.5} />
          <p className={styles.choose_text}>Безопасные учебные автомобили с видеорегистратором</p>
        </div>
        <div className={styles.choose_image}>
          <Image src="/img/image 7.png" alt="SDS" width={400} height={247.5} />
          <p className={styles.choose_text}>Обучение по отработаным методикам сделают вас экспертом ПДД</p>
        </div>
      </div>
    </div>
  );
}

export default Reasonschoose;
