const { getQuote, createTransaction } = require('../services/quoteService');

const fetchQuote = async (req, res) => {
    try {
        const quote = await getQuote(req.body);
        res.json(quote);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

const handleTransaction = async (req, res) => {
    try {
        const transactionParams = await createTransaction(req.body);
        res.json(transactionParams);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

module.exports = { fetchQuote, handleTransaction };