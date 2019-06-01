const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/fec_history';
// const mongoUri = 'mongodb://172.19.0.2:27017/fec_history'; // docker network inspect

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  process.stdout.write('Now connected to MongoDB database...');
});

module.exports = db;
