const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content, Accept, Content-Type, Authorization"
  );
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, PUT, DELETE, PATCH, OPTIONS"
  );
  next();
});

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/', express.static(path.join(__dirname,'client')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'client' , 'index.html'));
});

module.exports = app;
