import axios from 'axios';
const API_BASE_URL = 'https://api.github.com';
export const fetchUserData = async (user) => {
  try {
    const response = await axios.get(`${API_BASE_URL}/users/${user}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error;
  }
}