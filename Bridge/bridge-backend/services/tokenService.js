const axios = require('axios');

const getTokens = async (blockchain) => {
    const response = await axios.get(`https://api.xy.finance/tokens?blockchain=${blockchain}`);
    return response.data;
};

module.exports = { getTokens };
