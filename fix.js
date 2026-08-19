const fs = require('fs');
const content = import { API_BASE_URL } from '../config/api';
const API_URL = \\\\/api/users\\\;

export const getUserProfile = async () => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Not authenticated');

  const response = await fetch(\\\\/profile\\\, {
    method: 'GET',
    headers: {
      'Authorization': \\\Bearer \\\\
    }
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Gagal mengambil profil');
  }

  return await response.json();
};

export const updateUserProfile = async (profileData) => {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('Not authenticated');

  const response = await fetch(\\\\/profile\\\, {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': \\\Bearer \\\\
    },
    body: JSON.stringify(profileData)
  });

  if (!response.ok) {
    const errorData = await response.json().catch(() => ({}));
    throw new Error(errorData.message || 'Gagal menyimpan profil');
  }

  return await response.json();
};;
fs.writeFileSync('Frontend/src/services/userService.js', content);