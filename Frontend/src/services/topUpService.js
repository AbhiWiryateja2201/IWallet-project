import { API_BASE_URL } from '../config/api';
const API_URL = `${API_BASE_URL}/api/topup`;

export const topUpBalance = async (amount) => {
  const token = localStorage.getItem('token');
  if (!token) {
    throw new Error('Anda belum login');
  }

  // Generate a simple UUID-like string for Idempotency-Key
  const idempotencyKey = crypto.randomUUID ? crypto.randomUUID() : Math.random().toString(36).substring(2) + Date.now().toString(36);

  const response = await fetch(API_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
      'Idempotency-Key': idempotencyKey,
    },
    body: JSON.stringify({ amount }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    let errorMessage = errorText;
    try {
      const errorJson = JSON.parse(errorText);
      if (errorJson.message) errorMessage = errorJson.message;
    } catch (e) {}
    throw new Error(errorMessage);
  }

  return response.json();
};
