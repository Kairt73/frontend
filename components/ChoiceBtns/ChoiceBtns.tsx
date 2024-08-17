import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './choisebtns.module.css';

const ChoiceBtns: React.FC = () => {
  return (
    <div className={`${styles.choice} ${styles.mulish}`}>
      <div id='header' className={`${styles.header} ${styles.mulish}`}>
        <div className={styles.header_title}>
          <Link href="/">
            <Image className={styles.header_image} src="/img/Auschlogo.png" alt="ltl" width={80} height={100} />
          </Link>
          <div className={styles.autschool_logo}>
            <h4 className={styles.autschool}>Автошкола</h4>
            <h3 className={styles.autschool_name}>“БРТШ-ОСТО”</h3>
          </div>
        </div>
        <div className={styles.header_navigation}>
          <ul className={styles.header_menu}>
            <li className={styles.header_menu_links}>
              <Link href="/" className={styles.header_menu_link}>
                Главная
              </Link>
            </li>
            <li className={styles.header_menu_links}>
              <Link href="/" className={styles.header_menu_link}>
                О нас
              </Link>
            </li>
            <li className={styles.header_menu_links}>
              <Link href="/" className={styles.header_menu_link}>
                Условия обучения
              </Link>
            </li>
            <li className={styles.header_menu_links}>
              <Link href="/" className={styles.header_menu_link}>
                Контакты
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className={styles.choise_buttons}>
        <h1 className={styles.btns_text}>Онлайн тест по билетам ПДД</h1>
        <div className={styles.btns}>
          <Link href={"/TicketPage"} className={styles.ticket_order}>
            По номерам биллетов
          </Link>
          <button className={styles.random}>В случайном порядке</button>
        </div>
      </div>
    </div>
  );
};

export default ChoiceBtns;