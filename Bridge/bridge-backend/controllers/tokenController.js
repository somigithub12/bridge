const { getTokens } = require('../services/tokenService');

const fetchTokens = async (req, res) => {
    try {
        const tokens = await getTokens(req.query.blockchain);
        res.json(tokens);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { fetchTokens };