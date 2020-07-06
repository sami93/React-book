import axios from 'axios';
import { PICSUM_URL } from '../constants';

const getImage = () => {
  const sources = axios.get(`${PICSUM_URL}`);
  return sources;
};

export default getImage;
