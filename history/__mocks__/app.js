jest.mock('../controller');

const express = require('express');
const path = require('path');
const Purchase = require('../controller');

const app = express();

console.log('MOCK\nAPP APP APP APP APP APP\nAPP APP APP APP APP APP\nAPP APP APP APP APP APP\nAPP APP APP APP APP APP\nAPP APP APP APP APP APP\n')

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

app.get('/api/history/:stockID', (req, res) => {
  Purchase
    .getPurchases(req.params.stockID.toUpperCase())
    .then(data => res.status(200).send(data))
    .catch(err => res.status(500).send(err));
});

module.exports = { app };
