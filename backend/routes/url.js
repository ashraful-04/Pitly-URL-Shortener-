const express = require('express');
const router = express.Router();
const { handleGenerateShortURL, handleGetAnalytics, handleTracking } = require('../controllers/url');

router.post('/', handleGenerateShortURL);

router.get('/track/:user', handleTracking);

module.exports = router;