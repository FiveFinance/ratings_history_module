const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = 80;
const HOST = process.env.FEC_HOST || 'http://localhost';
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('*.js', (req, res, next) => {
  const encodings = req.acceptsEncodings();
  if (encodings.includes('br')) {
    req.url += '.br';
    res.set('Content-Encoding', 'br');
  } else if (encodings.includes('gzip')) {
    req.url += '.gz';
    res.set('Content-Encoding', 'gzip');
  }
  res.set('Content-Type', 'application/javascript');
  next();
});

const setDefault = (req, res, next) => {
  if (!req.params.id) {
    req.params.id = 'AAPL';
  }
  next();
};
app.use('/', setDefault);

app.use('/', express.static(path.join(__dirname, 'client/dist')));
app.use('/stocks/:id', express.static(path.join(__dirname, 'client/dist')));

app.get('/api/ratings/:id', (req, res) => {
  request(`${HOST}:3001/api/ratings/${req.params.id}/`, (err, response, body)=> {
    if(err){
      res.status(res.statusCode).send(err);
    }else {
      res.status(res.statusCode).send(body);
    }
  });
});

app.get('/api/history/:id', (req, res) => {
  request(`${HOST}:3011/api/history/${req.params.id}/`, (err, response, body)=> {
    if(err){
      res.status(response.statusCode).send(err);
    } else {
      res.status(response.statusCode).send(body);
    }
  });
});

const server = app.listen(PORT, () => {
  console.log(`Proxy server running at: ${HOST}:${PORT}`);
});

module.exports = { server, app };
