import axios from 'axios';

const API_BASE_URL = 'https://your-api.com/api/v1'; // Update with actual API

export const registerUser = async (fullname, email, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/register`, {
      fullname,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    console.error('Registration error:', error);
    throw error;
  }
};
