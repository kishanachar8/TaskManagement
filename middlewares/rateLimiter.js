const rateLimit = require('express-rate-limit');

exports.quoteLimiter = rateLimit({
  windowMs: 1 * 60 * 1000, // 1 min
  max: 5,
  message: 'Too many requests. Try again later.'
});