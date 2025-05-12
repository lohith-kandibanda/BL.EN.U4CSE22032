const express = require('express');
const router = express.Router();
const fetchStockData = require('../services/fetchStockData');
const calculateAverage = require('../utils/average');

router.get('/:ticker', async (req, res) => {
    const { ticker } = req.params;
    const minutes = parseInt(req.query.minutes);
    const aggregation = req.query.aggregation;

    if (!minutes || aggregation !== 'average') {
        return res.status(400).json({ error: 'Invalid query params' });
    }

    const data = await fetchStockData(ticker);
    if (!data) return res.status(404).json({ error: 'Stock not found' });

    const cutoff = Date.now() - minutes * 60 * 1000;
    const filtered = data.filter(item => new Date(item.lastUpdatedAt).getTime() >= cutoff);
    const prices = filtered.map(p => p.price);

    const average = calculateAverage(prices);

    res.json({
        averageStockPrice: average,
        priceHistory: filtered
    });
});

module.exports = router;
