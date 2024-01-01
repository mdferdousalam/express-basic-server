const express = require('express');

const app = express();

app.use('/reqtype', (req, res, next) => {
  console.log('Request type: ', req.method);
  res.send(`Type: ${req.method}`);
  next();
});

app.get('/', (req, res) => {
  res.send('Bismillahir rahmanir rahim...');
});


app.listen(8120, () => console.log('Bismillah app is listening on port 8120.'));
