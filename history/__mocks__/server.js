const app = require('./app.js');

const PORT = 3011;
const HOST = 'http://localhost';

console.log('MOCK\nSERVER\nSERVER\nSERVER\nSERVER\nSERVER\nSERVER\nSERVER\nSERVER\n');

app.listen(PORT, () => {
  process.stdout.write(`Server running at: ${HOST}:${PORT}`, '\n');
});
