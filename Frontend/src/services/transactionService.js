import { API_BASE_URL } from '../config/api';
const API_URL = `${API_BASE_URL}/api/transactions`;

export const getTransactionHistory = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Not authenticated');

  const response = await fetch(`${API_URL}/history`, {
    method: 'GET',
    headers: {
      'Authorization': `Bearer ${token}`
    }
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Gagal mengambil riwayat transaksi');
  }

  return await response.json();
};
