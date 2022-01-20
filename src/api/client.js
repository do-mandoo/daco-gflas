import axios from 'axios';

const client = axios.create({ baseURL: 'http://34.64.135.42:5000' });

export default client;
