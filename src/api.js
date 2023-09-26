import axios from 'axios';

const BASE_URL = 'http://localhost:8000';

const fetchPosts = () => {
  return axios.get(`${BASE_URL}/posts/`);
};

const fetchCommentsForPost = (postId) => {
  return axios.get(`${BASE_URL}/comments/?post=${postId}`);
};

const fetchGames = () => {
  return axios.get(`${BASE_URL}/games/`);
};

const fetchPostGames = (postId) => {
  return axios.get(`${BASE_URL}/postgames/?post=${postId}`);
};

export { fetchPosts, fetchCommentsForPost, fetchGames, fetchPostGames };