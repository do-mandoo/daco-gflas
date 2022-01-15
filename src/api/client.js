import axios from 'axios';

const client = axios.create({ baseURL: 'http://34.64.68.94:5000' });

export default client;
