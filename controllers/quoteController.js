const axios = require('axios');

exports.getQuote = async (req, res) => {
  try {
    const response = await axios.get('https://zenquotes.io/api/random');
    res.json(response.data[0].q);
  } catch (err) {
    res.status(500).json({ error: 'Could not fetch quote' });
  }
};