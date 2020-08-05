import axios from 'axios';

const instance = axios.create({
  baseURL: 'localhost:4000'
});

export default instance;