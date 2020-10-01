const express = require('express');
const serverless = require('serverless-http');
const cors = require('cors');
const app = express();
const bodyParser = require('body-parser');

app.use(cors());
app.use(bodyParser.json());

module.exports = app;
module.exports.handler = serverless(app);