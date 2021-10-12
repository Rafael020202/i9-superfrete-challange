import axios from 'axios';

const api = axios.create({
  baseURL: 'http://ws.correios.com.br'
});

export default api;