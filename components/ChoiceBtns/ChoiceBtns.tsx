import Image from 'next/image';
import Link from 'next/link';
import styles from './choisebtns.module.css';

const ChoiceBtns: React.FC = () => {
  return (
    <div className={styles.choice}>
      <div id='header' className={styles.header}>
        <div className={styles.header_title}>
          <Link href="/">
            <a>
              <Image className={styles.header_image} src="/img/Auschlogo.png" alt="ltl" width={80} height={100} />
            </a>
          </Link>
          <div className={styles.autschool_logo}>
            <h4 className={styles.autschool}>Автошкола</h4>
            <h3 className={styles.autschool_name}>“БРТШ-ОСТО”</h3>
          </div>
        </div>
        <div className={styles.header_navigation}>
          <ul className={styles.header_menu}>
            <li className={styles.header_menu_links}>
              <Link href="/">
                <a className={styles.header_menu_link}>Главная</a>
              </Link>
            </li>
            <li className={styles.header_menu_links}>
              <Link href="/about">
                <a className={styles.header_menu_link}>О нас</a>
              </Link>
            </li>
            <li className={styles.header_menu_links}>
              <Link href="/conditions">
                <a className={styles.header_menu_link}>Условия обучения</a>
              </Link>
            </li>
            <li className={styles.header_menu_links}>
              <Link href="/contacts">
                <a className={styles.header_menu_link}>Контакты</a>
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.choise_buttons}>
        <h1 className={styles.btns_text}>Онлайн тест по билетам ПДД</h1>
        <div className={styles.btns}>
          <Link href="/tickets">
            <a className={styles.ticket_order}>По номерам биллетов</a>
          </Link>
          <button className={styles.random}>В случайном порядке</button>
        </div>
      </div>
    </div>
  );
};

export default ChoiceBtns;
