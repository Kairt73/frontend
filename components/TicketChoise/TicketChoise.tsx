import Link from 'next/link';
import Image from 'next/image';
import { Mulish } from 'next/font/google';
import { Ticket } from '../../app/TicketPage/page';
import styles from './ticketchoise.module.css';

const mulish = Mulish({ subsets: ['latin'], weight: ['400', '500', '700'] });

interface TicketChoiseProps {
  tickets: Ticket[];
}

const TicketChoise: React.FC<TicketChoiseProps> = ({ tickets }) => {
  return (
    <div className={`${styles.choice_ticket} ${mulish.className}`}>
      <div id="header" className={styles.header}>
        <div className={styles.header_title}>
          <Link href="/" passHref>
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
      <div className={styles.tickets_choise}>
        <h1 className={styles.ticket_text}>Экзаменационые билеты</h1>
        <div className={styles.tickets}>
          <div className={styles.ticket_list}>
            {tickets.map((ticket) => (
              <button key={ticket.id} className={styles.ticket_btn}>
                {ticket.ticketName}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketChoise;
