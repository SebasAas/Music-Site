const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
const session = require('express-session');
const passport = require('passport');
const helmet = require('helmet');
const routes = require('../routes/routes');

require('../config/passport-config');

const app = express();

app.set('port', process.env.PORT || 4000);

app.use(helmet());
app.use(cors());
app.use(morgan('tiny'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: false,
  saveUninitialized: false,
}));

app.use(passport.initialize());
// Necesario si nuestra aplicacion usa persistencia de inicio de sesion
app.use(passport.session());

// Routes
app.use(routes());

module.exports = app;