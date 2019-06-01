const app = require('./app.js');

const PORT = process.env.FEC1 || 3001;
const HOST = process.env.FEC_HOST || 'http://localhost';

app.listen(PORT, () => {
  process.stdout.write(`Server running at: ${HOST}:${PORT}`, '\n');
});

module.exports = { app };
