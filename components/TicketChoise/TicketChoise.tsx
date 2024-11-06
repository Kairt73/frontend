// TicketChoise.tsx
'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Mulish } from 'next/font/google';
import styles from './ticketchoise.module.css';

const mulish = Mulish({ subsets: ['latin'], weight: ['400', '500', '700'] });

interface Ticket {
  id: number;
  ticketName: string;
}

interface TicketChoiseProps {
  tickets: Ticket[];
  onSelectTicket: (ticketId: number) => void;
}

const TicketChoise: React.FC<TicketChoiseProps> = ({ tickets, onSelectTicket }) => (
  <div className={`${styles.choice_ticket} ${mulish.className}`}>
    <Header />
    <h1 className={styles.ticket_text}>Экзаменационные билеты</h1>
    <div className={styles.ticket_list}>
      {tickets.map((ticket) => (
        <button
          key={ticket.id}
          className={styles.ticket_btn}
          onClick={() => onSelectTicket(ticket.id)}
        >
          Билет № {ticket.id}
        </button>
      ))}
    </div>
  </div>
);

const Header: React.FC = () => (
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
    <Navigation />
  </div>
);

const Navigation: React.FC = () => (
  <div className={styles.header_navigation}>
    <ul className={styles.header_menu}>
      {['Главная', 'О нас', 'Условия обучения', 'Контакты'].map((item, index) => (
        <li key={index} className={styles.header_menu_links}>
          <Link href="/" className={styles.header_menu_link}>
            {item}
          </Link>
        </li>
      ))}
    </ul>
  </div>
);

export default TicketChoise;
