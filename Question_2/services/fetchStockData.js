const axios = require('axios');
const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDU5MjM5LCJpYXQiOjE3NDcwNTg5MzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVhMWFiMmM5LTZhYzItNDJlYi1hZTliLWUxMTk2Mzc2ODZlMiIsInN1YiI6ImxvaGl0aGtjc2VAZ21haWwuY29tIn0sImVtYWlsIjoibG9oaXRoa2NzZUBnbWFpbC5jb20iLCJuYW1lIjoia2FuZGliYW5kYSBsb2hpdGgiLCJyb2xsTm8iOiJibC5lbi51NGNzZTIyMDMyIiwiYWNjZXNzQ29kZSI6IlN3dXVLRSIsImNsaWVudElEIjoiNWExYWIyYzktNmFjMi00MmViLWFlOWItZTExOTYzNzY4NmUyIiwiY2xpZW50U2VjcmV0IjoiQ3B0VkhIeFRDdVp6U0d3RyJ9.FizP_QvyUrH7zopCoYJgfbhwNqWBFird5qaQpEgQ-E4";

module.exports = async function fetchStockData(ticker) {
    const endpoint = `http://20.244.56.144/evaluation-service/stocks/${ticker}`;
    try {
        const response = await axios.get(endpoint, {
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        });
        return response.data;
    } catch (err) {
        console.log("Stock API failed:", err.message);
        return null;
    }
};
