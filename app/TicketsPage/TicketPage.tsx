import TicketChoise from "../../components/TicketChoise/TicketChoise";

export interface Ticket {
  id: number;
  ticketName: string;
}

const tickets: Ticket[] = Array.from({ length: 80 }, (_, i) => ({
  id: i + 1,
  ticketName: `Билет №${i + 1}`,
}));

const TicketPage = () => {
  return (
    <>
      <TicketChoise tickets={tickets} />
    </>
  );
};

export default TicketPage;
