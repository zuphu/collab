var express = require('express');
var path = require('path');
var debug = require('debug')('collab-api:app');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var passport = require('passport');
var flash = require('connect-flash');
var session = require('express-session');
var configDB = require('./config/database.js');

//routes
var index = require('./routes/index.js');
var users = require('./routes/users.js');
var logout = require('./routes/logout.js');
var login = require('./routes/login.js');
var signup = require('./routes/signup.js');
var profile = require('./routes/profile.js');
var logout = require('./routes/logout.js');
var facebook = require('./routes/facebook.js');
var app = express();

require('./config/passport.js')(passport); // pass passport for configuration

// view engine setup
app.set('views', path.join(__dirname, 'views')); 
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({
	secret: 'runningwithscissors'
}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

mongoose.connect(configDB.url); // connect to our database

app.use('/', index);
app.use('/', facebook);
app.use('/users', users);
app.use('/login', login);
app.use('/logout', logout);
app.use('/signup', signup);
app.use('/profile', profile);
app.use('/logout', logout);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
