// services/api/client.ts
import axios from 'axios';
import { useAuthStore } from '@/store/useAuthStore';

export const apiClient = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL ?? 'http://localhost:8000/',
});

apiClient.interceptors.request.use((config) => {
  const token = useAuthStore.getState().accessToken;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});
