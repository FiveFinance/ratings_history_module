const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/fec_ratings';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  process.stdout.write('Now connected to MongoDB database');
});

module.exports = db;
