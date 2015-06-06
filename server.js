/*
 * SERVER.JS
 */

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

var express = require('express')
  , app = express()
  // MIDDLEWARE
  , path = require('path')
  , bodyParser = require('body-parser')
  , flash = require('connect-flash')
  , session = require('express-session')
  // ENVIRONMENT CONFIGURATION
  , config = require('./config')
  // DB CONFIGURATION
  , db = require('./db')()
  // ROUTING
  , routes = require('./routes')
  // INITIALIZE SERVER
  , server = app.listen(config.port)

// GRAB PUBLIC FOLDER WITH ANGULAR APP
app.use("/", express.static(path.join(__dirname, 'public')));

app.use(flash());
app.use(session({
  saveUninitialized: true,
  resave: true,
  secret: 'OurSuperSecretCookieSecret'
}));

// app.use(cookieParser());

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');
app.set('view options', {
  layout: false
});

// app.use(passport.initialize());
// app.use(passport.session());

// routes
app.get('/', routes.index);
app.get('/templates/:name', routes.templates);
require('./routes/api')(app);

// redirect all others to the index (HTML5 history)
app.get('*', routes.index);

module.exports = server;
console.log(process.env.NODE_ENV  + ' server running at http://localhost:' + config.port);


