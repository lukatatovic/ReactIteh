import { create } from 'zustand';
import axios from 'axios';

const API_URL = 'http://localhost:8000/api/auth';
axios.defaults.withCredentials = true;

export const useAuthStore = create((set) => ({
  // State
  user: null,
  isAuthenticated: false,
  error: null,
  isLoading: false,
  isCheckingAuth: true,

  // Sign Up
  signup: async (email, password, name) => {
    set({ isLoading: true, error: null });
    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        name,
      });

      set({
        user: response.data.user,
        isAuthenticated: true,
        isLoading: false,
      });
    } catch (error) {
      set({
        error:
          error.response.data.message ||
          'Something went wrong while signing up',
        isLoading: false,
      });
      throw error;
    }
  },
}));