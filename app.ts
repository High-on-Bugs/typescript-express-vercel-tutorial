// typescript app to start basic http server (express)

import express from 'express';

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
});

console.log('Server running on port 3000');

export default app;