import Image from 'next/image'
import Link from 'next/link'
import styles from "./header.module.css";

const Header = () => {
  return (
    <>
      <div id="header" className={styles.header}>
        <div className={styles.header_title}>
          <Link href="/">
            <Image
              className={styles.header_image}
              src="./../../../public/img/Auschlogo.png"
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
              <a className={styles.header_menu_link} href="#homepage">
                Главная
              </a>
            </li>
            <li className={styles.header_menu_links}>
              <a className={styles.header_menu_link} href="#aboutus">
                О нас
              </a>
            </li>
            <li className={styles.header_menu_links}>
              <a className={styles.header_menu_link} href="#conditions">
                Условия обучения
              </a>
            </li>
            <li className={styles.header_menu_links}>
              <a className={styles.header_menu_link} href="#footer">
                Контакты
              </a>
            </li>
          </ul>
        </div>
        <div className={styles.header_test}>
          <Link className={styles.test_start} href={"/choice"}>
            Пройти тестирование
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
