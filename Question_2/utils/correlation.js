const express = require('express');
const router = express.Router();
const fetchStockData = require('../services/fetchStockData');
const computeCorrelation = require('../utils/correlation');
const calculateAverage = require('../utils/average');

router.get('/', async (req, res) => {
    const { minutes, ticker } = req.query;

    if (!minutes || !ticker || ticker.length !== 2) {
        return res.status(400).json({ error: 'Must provide 2 tickers and minutes' });
    }

    const [t1, t2] = ticker;
    const data1 = await fetchStockData(t1);
    const data2 = await fetchStockData(t2);

    const cutoff = Date.now() - minutes * 60 * 1000;
    const f1 = data1.filter(d => new Date(d.lastUpdatedAt).getTime() >= cutoff);
    const f2 = data2.filter(d => new Date(d.lastUpdatedAt).getTime() >= cutoff);

    const p1 = f1.map(x => x.price);
    const p2 = f2.map(x => x.price);

    const corr = computeCorrelation(p1, p2);

    res.json({
        correlation: corr,
        stocks: {
            [t1]: { averagePrice: calculateAverage(p1), priceHistory: f1 },
            [t2]: { averagePrice: calculateAverage(p2), priceHistory: f2 }
        }
    });
});

module.exports = router;
