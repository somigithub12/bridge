const express = require('express');
const { fetchTokens } = require('../controllers/tokenController');
const router = express.Router();

router.get('/', fetchTokens);

module.exports = router;