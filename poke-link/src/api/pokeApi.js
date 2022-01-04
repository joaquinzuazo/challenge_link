const axios = require('axios');

export async function getPoke(url) {
    try {
        const response = await axios.get(url);
        return response
    } catch (error) {
        console.error(error);
    }
}