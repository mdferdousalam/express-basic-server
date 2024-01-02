const express = require('express');
require('dotenv').config();

//const config=require('config');

const app = express();

const port=process.env.PORT;

app.use('/reqtype', (req, res, next) => {
  console.log('Request type: ', req.method);
  res.send(`Type: ${req.method}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Bismillahir rahmanir rahim...');
});


app.listen(`${port}`, () => console.log(`Bismillah app is listening on port ${port}`));
