const mongoose = require('mongoose');

// const mongoUri = 'mongodb://172.17.0.4/fec_history'; // local docker
const mongoUri = 'mongodb://localhost/fec_ratings';
// const mongoUri = 'mongodb://172.17.0.2/fec_history'; // AWS docker

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  process.stdout.write('Now connected to MongoDB database...');
});

module.exports = db;
