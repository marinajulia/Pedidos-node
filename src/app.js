'use strict';

const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const app = express();
const router = express.Router();
const config= require('./config');

mongoose.connect(config.connectionString);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

module.exports = app;