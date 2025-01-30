'use client';

import React, { useState, useEffect } from 'react';
import TicketChoise, { Ticket } from '../../components/TicketChoise/TicketChoise';

const TicketPage: React.FC = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const [selectedTickets, setSelectedTickets] = useState<number[]>([]);

  useEffect(() => {
    const fetchTickets = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/active_ticket_list");
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
    setSelectedTickets((prev) => {
      const updatedSelection = prev.length < 2 ? [...prev, ticketId] : [ticketId];
      if (updatedSelection.length === 2) fetchQuestions(updatedSelection);
      return updatedSelection;
    });
  };

  const fetchQuestions = async ([ticketId1, ticketId2]: number[]) => {
    try {
      const response = await fetch(`http://localhost:8080/api/question_list?ticket_id1=${ticketId1}&ticket_id2=${ticketId2}`);
      if (!response.ok) throw new Error(`Error: ${response.status}`);

      const data = await response.json();
      console.log("Received questions:", data.questions);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  };

  return <TicketChoise tickets={tickets} onSelectTicket={handleTicketClick} />;
};

export default TicketPage;
