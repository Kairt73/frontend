import styles from './footer.module.css';
import Image from 'next/image';
import Link from 'next/link';

const Footer: React.FC = () => {
  return (
    <div id={'footer'} className={styles.footer}>
      <div className={styles.footer_info}>
        <div className={styles.phone_numbers}>
          <h4 className={styles.name_number}>Номера для связи:</h4>
          <ul className={styles.numbers_list}>
            <li className={styles.number}>
              <Image src="/img2/SVG/Phone.svg" alt="SDS" width={40} height={40} />
              <p>(0312) 54-54-02</p>
            </li>
            <li className={styles.number}>
              <Image src="/img2/SVG/Phone.svg" alt="SDS" width={40} height={40} />
              <p>(0312) 54-54-03</p>
            </li>
            <li className={styles.number}>
              <Image src="/img2/SVG/Phone.svg" alt="SDS" width={40} height={40} />
              <p>(0509) 88-89-11</p>
            </li>
          </ul>
        </div>
        <div className={styles.social_network}>
          <h4 className={styles.name_network}>Соц.сети:</h4>
          <ul className={styles.network_list}>
            <li className={styles.social}>
              <Image src="/img2/SVG/Facebook.png" alt="SDS" width={40} height={40} />
              <p>Досааф Остовский</p>
            </li>
            <li className={styles.social}>
              <Image src="/img2/SVG/Instagram.png" alt="SDS" width={40} height={40} />
              <p>@avtoshkola_brtsh_octo</p>
            </li>
            <li className={styles.social}>
              <Image src="/img2/SVG/Whatsapp.png" alt="SDS" width={40} height={40} />
              <p>+996(0509) 88-89-11</p>
            </li>
          </ul>
        </div>
        <div className={styles.additional_information}>
          <h4 className={styles.name_additional}>Дополнительная информация:</h4>
          <ul className={styles.additional_list}>
            <li className={styles.additional}>
              <Image src="/img2/SVG/Mail.png" alt="SDS" width={40} height={40} />
              <p>rtshocto@mail.ru</p>
            </li>
            <li className={styles.additional}>
              <Image src="/img2/SVG/Geo.png" alt="SDS" width={40} height={40} />
              <p>Адрес: г.Бишкек, переулок.Ботанический 1 а</p>
            </li>
          </ul>
        </div>
        <div className={styles.header_title}>
          <Link href="#header">
            <Image src="/img2/Auschlogo.png" alt="ltl" width={80} height={100} />
          </Link>
          <div className={styles.autschool_logo}>
            <h4 className={styles.autschool}>Автошкола</h4>
            <h3 className={styles.autschool_name}>“БРТШ-ОСТО”</h3>
          </div>
        </div>
      </div>
      <div className={styles.footer_red}>.</div>
    </div>
  );
};

export default Footer;

