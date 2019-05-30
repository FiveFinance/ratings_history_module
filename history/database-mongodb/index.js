const mongoose = require('mongoose');

const mongoUri = 'mongodb://localhost/fec_ratings';
// const mongoUri = 'mongodb://heroku_1lxm7wjq:nee5ir7pvpnk9b50l6luc8k8bp@ds259241.mlab.com:59241/heroku_1lxm7wjq';

mongoose.connect(mongoUri, { useNewUrlParser: true });
const db = mongoose.connection;

db.once('open', () => {
  // console.log('Now connected to MongoDB database, Heroku mLab addon');
  console.log('Now connected to MongoDB database...');
});

module.exports = db;
