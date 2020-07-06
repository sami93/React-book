import axios from 'axios';
import { API_BOOKS_URL } from '../constants';

const getBook = () => {
  const sources = axios.get(`${API_BOOKS_URL}`);
  return sources;
};

export default getBook;
