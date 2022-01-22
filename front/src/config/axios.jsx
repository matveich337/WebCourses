import axios from 'axios';

export const apiClient = axios.create(
    {
        baseURL: 'http://localhost:4122',
        responseType: 'json'
    }
);
