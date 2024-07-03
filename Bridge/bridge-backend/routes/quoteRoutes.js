const express = require('express');
const { fetchQuote, handleTransaction } = require('../controllers/quoteController');
const router = express.Router();

router.post('/', fetchQuote);
router.post('/params', handleTransaction);

module.exports = router;