const cache = {};

function getCachedStock(ticker) {
    return cache[ticker];
}

function setCachedStock(ticker, data) {
    cache[ticker] = {
        data,
        fetchedAt: Date.now()
    };
}

module.exports = {
    getCachedStock,
    setCachedStock
};
