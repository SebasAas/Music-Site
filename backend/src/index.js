require('dotenv').config();

const chalk = require('chalk');
const debug = require('debug')('from:app');

// Server
const app = require('./server/server');

// Database
require('./database/connectionString');

// Port
const port = app.get('port');

app.listen(port, () => {
  debug(`Listeninig on port ${chalk.green(port)}`);
});