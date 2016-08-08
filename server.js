const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const path = require('path');
const request = require('request');
const http = require('http');
const cors = require('cors');

var port = process.env.PORT || 8080;
var hostName = process.env.HOST || 'localhost';
var router = express.Router();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use((req, res, next) => {
  return cors({credentials: true, origin: req.headers.origin || req.headers.host})(req, res, next) 
});
app.use(express.static(path.join(__dirname, 'dist')));

//register our routes (all prefixed with /api)
app.use('/', router);

//start the server
app.listen(port)
console.log('magic happens on port ' + port)