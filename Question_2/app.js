const express = require('express');
const app = express();
const stockRouter = require('./routes/stock');
const correlationRouter = require('./routes/correlation');

app.use('/stocks', stockRouter);
app.use('/stockcorrelation', correlationRouter);

app.listen(9877, () => console.log('Server running on http://localhost:9877'));
