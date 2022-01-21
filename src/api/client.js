import axios from 'axios';

const client = axios.create({ baseURL: 'http://34.64.207.232:5000' });

export default client;
