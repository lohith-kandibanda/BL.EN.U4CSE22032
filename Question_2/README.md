# Stock Price Aggregation Microservice

## Description
This microservice fetches real-time stock data and provides:
- Average price over last `m` minutes
- Correlation of price movements between two tickers

## Endpoints

### 1. Average Stock Price
`GET /stocks/:ticker?minutes=m&aggregation=average`

### 2. Price Correlation
`GET /stockcorrelation?minutes=m&ticker=ABC&ticker=XYZ`

## Setup
```bash
npm install
node app.js
