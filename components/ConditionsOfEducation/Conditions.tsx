import styles from './conditions.module.css';
import Image from 'next/image';

const Conditions: React.FC = () => {
  return (
    <div id='conditions' className={styles.conditions}>
      <h1 className={styles.condition_education}>
        Условия обучения:
      </h1>
      <div className={styles.carts}>
        <div className={styles.cart}>
          <Image src="/img/Conditions.image/Audi.png" alt="SDS" width={260} height={200} />
          <p className={styles.condition_price}>
            Категория B
            <br />
            10 000 сом
            <br />
            срок обучения
            <br />
            2.5 месяца
          </p>
        </div>
        <div className={styles.cart}>
          <Image src="/img/Conditions.image/Kamaz.png" alt="SDS" width={260} height={200} />
          <p className={styles.condition_price}>
            Категория BC
            <br />
            12 000 СОМ
            <br />
            срок обучения
            <br />
            3.5 месяца
          </p>
        </div>
        <div className={styles.cart}>
          <Image src="/img/Conditions.image/Track.png" alt="SDS" width={260} height={200} />
          <p className={styles.condition_price}>
            Категория CE
            <br />
            8 000 СОМ
            <br />
            срок обучения
            <br />
            1.5 месяца
          </p>
        </div>
        <div className={styles.cart}>
          <Image src="/img/Conditions.image/Bus.png" alt="SDS" width={260} height={200} />
          <p className={styles.condition_price}>
            Категория D
            <br />
            8 000 СОМ
            <br />
            срок обучения
            <br />
            1.5 месяца
          </p>
        </div>
      </div>
    </div>
  );
}

export default Conditions;
