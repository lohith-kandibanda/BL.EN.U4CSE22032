module.exports = function calculateAverage(prices) {
    if (!prices.length) return null;
    const sum = prices.reduce((a, b) => a + b, 0);
    return sum / prices.length;
};
