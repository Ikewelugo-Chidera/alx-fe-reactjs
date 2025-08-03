// src/services/githubService.js
import axios from 'axios';

const BASE_URL = 'https://api.github.com';

export const fetchUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/users/${username}`);
    return response.data.items;
  } catch (error) {
    console.error("Error fetching GitHub users:", error);
    return [];
}
};