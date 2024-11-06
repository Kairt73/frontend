import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // URL вашего бэкенда

const apiClient = axios.create({
    baseURL: API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

export const getTickets = async () => {
    try {
        const response = await apiClient.get('/api/tickets');
        return response.data;
    } catch (error) {
        console.error('Ошибка при получении билетов:', error);
        throw error;
    }
};

export const getTicketById = async (id: number) => {
    try {
        const response = await apiClient.get(`/api/tickets/${id}`);
        return response.data;
    } catch (error) {
        console.error(`Ошибка при получении билета с ID ${id}:`, error);
        throw error;
    }
};