const mongoose = require('mongoose');

const DBHOST = process.env.FEC_DB || 'mongodb://localhost:27017';
const mongoUri = `${DBHOST}/fec_history`;

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  process.stdout.write('Now connected to MongoDB database...');
});

module.exports = db;
