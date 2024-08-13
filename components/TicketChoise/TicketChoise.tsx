import Link from 'next/link';
import Image from 'next/image';
import { Ticket } from '../../app/TicketsPage/page';
import styles from './ticketchoise.module.css';

interface TicketChoiseProps {
  tickets: Ticket[];
}

const TicketChoise: React.FC<TicketChoiseProps> = ({ tickets }) => {
  return (
    <div className={styles.choice_ticket}>
      <div id="header" className={styles.header}>
        <div className={styles.header_title}>
          <Link href="/" passHref>
            <a>
              <Image
                className={styles.header_image}
                src="/img/Auschlogo.png"
                alt="ltl"
                width={80}
                height={100}
              />
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
              <Link href="/" passHref>
                <a className={styles.header_menu_link}>Главная</a>
              </Link>
            </li>
            <li className={styles.header_menu_links}>
              <Link href="/" passHref>
                <a className={styles.header_menu_link}>О нас</a>
              </Link>
            </li>
            <li className={styles.header_menu_links}>
              <Link href="/" passHref>
                <a className={styles.header_menu_link}>Условия обучения</a>
              </Link>
            </li>
            <li className={styles.header_menu_links}>
              <Link href="/" passHref>
                <a className={styles.header_menu_link}>Контакты</a>
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
