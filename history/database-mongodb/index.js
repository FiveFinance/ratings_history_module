const mongoose = require('mongoose');

const mongoUri = 'mongodb://172.17.0.4/fec_history';
// const mongoUri = 'mongodb://localhost/fec_history';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  process.stdout.write('Now connected to MongoDB database...');
});

module.exports = db;
