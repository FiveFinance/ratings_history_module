const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/fec_history';
// const mongoUri = 'mongodb://heroku_1lxm7wjq:nee5ir7pvpnk9b50l6luc8k8bp@ds259241.mlab.com:59241/heroku_1lxm7wjq';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  // console.log('Now connected to MongoDB database, Heroku mLab addon');
  process.stdout.write('Now connected to MongoDB database...');
});

module.exports = db;
