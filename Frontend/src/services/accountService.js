import { API_BASE_URL } from '../config/api';
const API_URL = `${API_BASE_URL}/api/users`;

const getAuthHeaders = () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Not authenticated');
  return {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${token}`
  };
};

export const changePin = async (oldPin, newPin) => {
  const response = await fetch(`${API_URL}/change-pin`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify({ oldPin, newPin }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Gagal mengubah PIN');
  }
  return await response.json();
};

export const changePassword = async (oldPassword, newPassword) => {
  const response = await fetch(`${API_URL}/change-password`, {
    method: 'PUT',
    headers: getAuthHeaders(),
    body: JSON.stringify({ oldPassword, newPassword }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Gagal mengubah password');
  }
  return await response.json();
};

export const deleteAccount = async (password) => {
  const response = await fetch(`${API_URL}/delete-account`, {
    method: 'DELETE',
    headers: getAuthHeaders(),
    body: JSON.stringify({ password }),
  });
  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Gagal menghapus akun');
  }
  return await response.json();
};
