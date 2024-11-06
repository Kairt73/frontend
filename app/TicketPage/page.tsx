// TicketPage.tsx
'use client';
import { useRouter } from 'next/navigation';
import React, { useState, useEffect } from 'react';
import TicketChoise, { Ticket } from '../../components/TicketChoise/TicketChoise';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

const TicketPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const router = useRouter();

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch(`${BASE_URL}/api/active_ticket_list`);
        if (!response.ok) throw new Error(`Error: ${response.status}`);
        const data = await response.json();
        setTickets(data.ticket_list);
      } catch (error) {
        console.error("Failed to fetch tickets:", error);
      }
    };
    fetchTickets();
  }, []);

  const handleTicketClick = (ticketId: number) => {
    router.push(`/test?ticketId=${ticketId}`);
  };

  return <TicketChoise tickets={tickets} onSelectTicket={handleTicketClick} />;
};

export default TicketPage;
