const express = require('express');
const path = require('path');
const Stock = require('./controller.js');

const app = express();

app.get('*.js', (req, res, next) => {
  const encodings = req.acceptsEncodings();
  if (encodings.includes('br')) {
    req.url += '.br';
    res.set('Content-Encoding', 'br');
    next();
  } else if (encodings.includes('gzip')) {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
    next();
  }
});

app.use('/', express.static(path.join(__dirname, 'client/dist')));
app.use('/stocks/:stockID', express.static(path.join(__dirname, 'client/dist')));

app.get('/api/ratings/:stockID', (req, res) => {
  Stock
    .getStocks(req.params.stockID.toUpperCase())
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
});

module.exports = app;
