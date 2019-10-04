'use strict';

const express = require('express');

// Constants
const PORT = 3000;
const HOST = '0.0.0.0';

// App
const app = express();

app.get('/', (req, res) => {
  res.send('Hello world\n');
});

app.get('/sum', (req, res) => {
  var x = parseInt(req.query.x);
  var y = parseInt(req.query.y);
  res.send((x+y).toString());
});

app.listen(PORT, HOST);
console.log(`Running on http://${HOST}:${PORT}`);