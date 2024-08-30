import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/transactions';
axios.defaults.withCredentials = true;

export const useTransactionsStore = create((set) => ({
  // State
  error: null,
  isLoading: false,

  // Create Transaction
  createTransaction: async (data) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}`, data);

      set({
        isLoading: false,
      });
      return response.data;
    } catch (error) {
      set({
        error:
          error.response.data.message ||
          'Something went wrong while creating transaction',
        isLoading: false,
      });
      throw error;
    }
  },
}));