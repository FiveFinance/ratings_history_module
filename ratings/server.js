const express = require('express');
const path = require('path');
const Stock = require('./database-mongodb/Stock.js');

const app = express();
const PORT = 3001;

app.use('/', express.static(path.join(__dirname, 'client/dist')));
app.use('/stocks/:stockid', express.static(path.join(__dirname, 'client/dist')));

app.get('/api/ratings/:stockID', (req, res) => {
  Stock
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
  console.log(`server running at: http://localhost:${PORT}`);
});

module.exports = { server, app };
