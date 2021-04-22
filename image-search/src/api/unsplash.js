import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID XlFL9HQU0h8nnuzzLsE57FjJ2yXM2ZLeR-bFwJ6szOA'
    }
});