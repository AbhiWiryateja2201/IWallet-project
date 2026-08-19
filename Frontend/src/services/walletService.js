import { API_BASE_URL } from '../config/api';
const API_URL = `${API_BASE_URL}/api/wallet`;

export const getBalance = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Not authenticated');

  const response = await fetch(`${API_URL}/balance`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Gagal mengambil saldo');
  }

  return await response.json();
};
