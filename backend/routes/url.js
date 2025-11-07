const express = require('express');
const router = express.Router();
const { handleGenerateShortURL, handleGetAnalytics, handleTracking } = require('../controllers/url');

// ✅ Test route — for checking if backend works
router.get('/', (req, res) => {
  res.send('✅ URL Shortener backend route is working fine!');
});

// POST route — create a new short URL
router.post('/', handleGenerateShortURL);

// GET route — fetch analytics for a specific user
router.get('/track/:user', handleTracking);

module.exports = router;
