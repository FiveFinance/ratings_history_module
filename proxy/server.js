const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const path = require('path');
const cors = require('cors');
const app = express();

const PORT = 80;
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// const logErrors = (err, req, res, next) => {
//   console.error(err.stack);
//   next(err);
// }
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
  request(`http://localhost:3001/api/ratings/${req.params.id}/`, (err, response, body)=> {
    if(err){
      res.status(res.statusCode).send(err);
    }else {
      res.status(res.statusCode).send(body);
    }
  });
});

app.get('/api/history/:id', (req, res) => {
  request(`http://localhost:3011/api/history/${req.params.id}/`, (err, response, body)=> {
    if(err){
      res.status(response.statusCode).send(err);
    } else {
      res.status(response.statusCode).send(body);
    }
  });
});

const server = app.listen(PORT, () => {
  console.log(`Proxy server running at: http://localhost:${PORT}`);
});

module.exports = { server, app };
