const axios = require('axios');

export async function getPoke() {
    try {
        const url='https://pokeapi.co/api/v2/pokemon/?limit=50'
        const response = await axios.get(url);
        return response
    } catch (error) {
        console.error(error);
    }
}