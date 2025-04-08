import express from 'express';

const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// routes

app.get('/', (req, res) => {
  res.send('Hello World!');
});

import v1Routes from './routes/v1/index.js';


//handle not found routes

// error handling middleware



export default app;