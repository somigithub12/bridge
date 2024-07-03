import axios from 'axios';

const API_BASE_URL = 'http://localhost:3000';

export const fetchTokens = async (blockchain) => {
    const response = await axios.get(`${API_BASE_URL}/tokens?blockchain=${blockchain}`);
    return response.data;
};

export const fetchQuote = async (token, chain) => {
    const response = await axios.post(`${API_BASE_URL}/quotes`, { token, chain });
    return response.data;
};

export const createTransaction = async (quoteId) => {
    const response = await axios.post(`${API_BASE_URL}/quotes/params`, { quoteId });
    return response.data;
};
