import Link from 'next/link';
import Image from 'next/image';
import styles from './header.module.css';

const Header: React.FC = () => {
  return (
    <div id="header" className={styles.header}>
      <div className={styles.header_title}>
        <Link href="/">
          <Image
            className={styles.header_image}
            src="/img/Auschlogo.png"
            alt="ltl"
            width={80}
            height={100}
          />
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
            <Link href={"#aboutus"} className={styles.header_menu_link}>
              О нас
            </Link>
          </li>
          <li className={styles.header_menu_links}>
            <Link href={"#conditions"} className={styles.header_menu_link}>
              Условия обучения
            </Link>
          </li>
          <li className={styles.header_menu_links}>
            <Link href={"#footer"} className={styles.header_menu_link}>
              Контакты
            </Link>
          </li>
        </ul>
      </div>
      <div className={styles.header_test}>
        <Link href={"/ChoicePage"}>
          <button className={styles.test_start}>
            Пройти тестирование
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Header;
