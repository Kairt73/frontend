import Image from 'next/image';
import styles from './banner.module.css';

const Banner: React.FC = () => {
  return (
    <div id='homepage' className={styles.homepage}>
      <div className={styles.homepage_center}>
        <div className={styles.homepage_text}>
          <h1 className={styles.homepage_title}>
            Учим безопасной и уверенной езде
          </h1>
          <h4 className={styles.homepage_tagline}>
            Доверьте свой путь нам!
            Автошкола &quot;БРТШ-ОСТО&quot; - ваш ключ к профессиональному вождению!
          </h4>
        </div>
        <div className={styles.images_signs}>
          <Image
            className={styles.sings_big}
            src="/img/Sings.png"
            alt="SDS"
            width={220}
            height={210}
          />
          <Image
            className={styles.sings_small}
            src="/img/Sings2.png"
            alt="SDS"
            width={150}
            height={140}
          />
        </div>
      </div>
      <div className={styles.car}>
        <Image
          className={styles.image_car}
          src="/img/Car.png"
          alt="SDS"
          width={1200}
          height={600}
        />
      </div>
    </div>
  );
}

export default Banner;
