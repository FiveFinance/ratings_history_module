const app = require('./app');

const PORT = process.env.FEC1 || 3011;
const HOST = process.env.FEC_HOST || 'http://localhost';

const server = app.listen(PORT, () => {
  console.log(`Server running at: ${HOST}:${PORT}`, '\n');
});

module.exports = server;
