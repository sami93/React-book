import axios from 'axios';
import { API_BOOKS_URL } from '../constants';

export const getBook = () => axios.get(`${API_BOOKS_URL}`);
