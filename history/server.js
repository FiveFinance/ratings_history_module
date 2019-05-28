const express = require('express');
const path = require('path');
const Purchase = require('./database-mongodb/Stock2.js');

const app = express();
const PORT = 3011;

app.use('/', express.static(path.join(__dirname, 'client/dist')));
app.use('/stocks/:stockid', express.static(path.join(__dirname, 'client/dist')));

app.get('/api/history/:stockID', (req, res) => {
  Purchase
    .find({ symbol: req.params.stockID.toUpperCase() })
    .exec((err, data) => {
    if (err) {
      console.log(`Error: ${err}`);
      res.status(500).send(err);
    }
    res.status(200).send(data);
  });
});

const server = app.listen(PORT, () => {
  console.log(`Server running at: http://localhost:${PORT}`);
});

module.exports = { server, app };
