'use client'; // Указываем, что этот компонент должен работать на клиенте

import { useRouter } from 'next/navigation'; // Используем next/navigation для маршрутизации
import React, { useState, useEffect } from 'react';
import TicketChoise from "../../components/TicketChoise/TicketChoise";

export interface Ticket {
  id: number;
  ticketName: string;
}

const TicketPage = () => {
  const [tickets, setTickets] = useState<Ticket[]>([]);
  const router = useRouter();

  useEffect(() => {
    // Генерация 80 билетов
    const generateTickets = () => {
      const ticketList: Ticket[] = [];
      for (let i = 1; i <= 80; i++) {
        ticketList.push({ id: i, ticketName: `Билет №${i}` });
      }
      setTickets(ticketList);
    };

    generateTickets(); // Запускаем генерацию билетов при монтировании компонента

  }, []);

  const handleTicketClick = async (ticketId: number) => {
    try {
      const response = await fetch(`http://localhost:8080/api/question_list?ticket_id=${ticketId}`);
      const data = await response.json();
      if (data.success) {
        const questions = JSON.stringify(data.question_list);
        // Формируем строку URL
        const url = `/test?questions=${encodeURIComponent(questions)}`;
        router.push(url); // Переход по строке URL
      }
    } catch (error) {
      console.error("Ошибка при получении вопросов для билета:", error);
    }
  };

  return (
    <>
      <TicketChoise tickets={tickets} onRandomTest={(ticketId) => { handleTicketClick(ticketId); return; }} />
    </>
  );
};

export default TicketPage;
