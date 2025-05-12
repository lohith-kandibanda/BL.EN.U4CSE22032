const express = require('express');
const router = express.Router();
const fetchNumbers = require('../services/fetchNumbers');
const { updateWindow } = require('../utils/windowManager');

const WINDOW_SIZE = 10;
let numberWindow = [];

router.get('/:type', async (req, res) => {
    const { type } = req.params;
    const validTypes = ['p', 'f', 'e', 'r'];
    if (!validTypes.includes(type)) return res.status(400).json({ error: 'Invalid type' });

    const windowPrevState = [...numberWindow];

    try {
        const newNumbers = await fetchNumbers(type);
        numberWindow = updateWindow(numberWindow, newNumbers, WINDOW_SIZE);

        const avg = (numberWindow.reduce((a, b) => a + b, 0) / numberWindow.length).toFixed(2);

        return res.json({
            windowPrevState,
            windowCurrState: numberWindow,
            numbers: newNumbers,
            avg: parseFloat(avg)
        });
    } catch (err) {
        return res.status(500).json({ error: 'Something went wrong' });
    }
});

module.exports = router;
