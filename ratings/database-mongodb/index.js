const mongoose = require('mongoose');

const mongoUri = 'mongodb://172.17.0.4/fec_ratings';
// const mongoUri = 'mongodb://localhost/fec_ratings';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  process.stdout.write('Now connected to MongoDB database');
});

module.exports = db;
