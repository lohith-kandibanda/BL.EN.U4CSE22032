# Average Calculator Microservice
by BL.EN.U4CSE22032

## Description
A microservice that fetches prime, Fibonacci, even, or random numbers from a test server, maintains a window of unique numbers (size 10), and returns average and state snapshots.

## Endpoints
- `GET /numbers/:type` where `type` ∈ {p, f, e, r}

## Run
```bash
npm install
node app.js
