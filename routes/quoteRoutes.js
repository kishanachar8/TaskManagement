const express = require('express');
const router = express.Router();
const auth = require('../middlewares/auth');
const { quoteLimiter } = require('../middlewares/rateLimiter');
const { getQuote } = require('../controllers/quoteController');

router.get('/', auth, quoteLimiter, getQuote);

module.exports = router;