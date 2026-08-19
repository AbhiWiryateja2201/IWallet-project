import { API_BASE_URL } from '../config/api';
const API_URL = `${API_BASE_URL}/api/auth`;

export const register = async (userData) => {
  const response = await fetch(`${API_URL}/register`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(userData),
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

export const login = async (credentials) => {
  const response = await fetch(`${API_URL}/login`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(credentials),
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
