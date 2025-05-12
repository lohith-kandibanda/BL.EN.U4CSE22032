const axios = require('axios');

const TYPE_MAP = {
    p: 'primes',
    f: 'fibo',
    e: 'even',
    r: 'rand'
};

// ✅ Make sure this is your latest valid token
const BEARER_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQ3MDU5MjM5LCJpYXQiOjE3NDcwNTg5MzksImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjVhMWFiMmM5LTZhYzItNDJlYi1hZTliLWUxMTk2Mzc2ODZlMiIsInN1YiI6ImxvaGl0aGtjc2VAZ21haWwuY29tIn0sImVtYWlsIjoibG9oaXRoa2NzZUBnbWFpbC5jb20iLCJuYW1lIjoia2FuZGliYW5kYSBsb2hpdGgiLCJyb2xsTm8iOiJibC5lbi51NGNzZTIyMDMyIiwiYWNjZXNzQ29kZSI6IlN3dXVLRSIsImNsaWVudElEIjoiNWExYWIyYzktNmFjMi00MmViLWFlOWItZTExOTYzNzY4NmUyIiwiY2xpZW50U2VjcmV0IjoiQ3B0VkhIeFRDdVp6U0d3RyJ9.FizP_QvyUrH7zopCoYJgfbhwNqWBFird5qaQpEgQ-E4";

module.exports = async function fetchNumbers(type) {
    const endpoint = `http://20.244.56.144/evaluation-service/${TYPE_MAP[type]}`;
    try {
        const response = await axios.get(endpoint, {
            timeout: 500,
            headers: {
                Authorization: `Bearer ${BEARER_TOKEN}`
            }
        });

        if (response.status === 200 && response.data.numbers) {
            return response.data.numbers;
        }

        console.log("Unexpected response:", response.status, response.data);
        return [];
    } catch (error) {
        if (error.response) {
            console.log(`Fetch failed (Status ${error.response.status}):`, error.response.data.message);
        } else {
            console.log("Fetch failed:", error.message);
        }
        return [];
    }
};
