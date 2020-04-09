var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const nunjucks = require('nunjucks');
var indexRouter = require('./routes/index');

var app = express();

// view engine setup
nunjucks.configure('views', {
    express: app,
    autoescape: true
});
app.set('view engine', 'html');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);


// error handler

app.listen(3000, () => console.log(`Express running at http://localhost:3000`));
