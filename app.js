var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var spRouter = require('./routes/sanpham');
var apiUser = require('./routes/api-user');
var apiSp = require('./routes/api-sp');
var login = require('./routes/login');
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/sp',spRouter)
app.use('/apiUser',apiUser)
app.use('/apiSp',apiSp)
app.use('/login',login)
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

//API
res.status(err.status || 500)

if(req.originalUrl.indexOf('/api')==0){
  res.json(   {
  status :0,
  msg:err.message
     }   );
}else{
  res.render('error')
}
res.render('error');
});

module.exports = app;
