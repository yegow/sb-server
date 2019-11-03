var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
const favicon = require('express-favicon');

import { apiRouter } from './routes';
import cors from 'cors';

var app = express();

app.use(cors());
app.use(logger('dev'));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(express.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.json());
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api', apiRouter);

module.exports = app;
