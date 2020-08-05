const mongoose = require('mongoose');
const { connect, connection } = mongoose;

const {
  DBHOSTCLOUD,
  DB,
  USERDB,
  PASSWORDDB
} = process.env;

const uri = `mongodb+srv://${USERDB}:${PASSWORDDB}@${DBHOSTCLOUD}/${DB}?retryWrites=true&w=majority`;

connect(uri, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
  .then(() => {
    if (connection.readyState === 1) {
      console.log('MongoDB database connection established successfully');
    } else {
      console.log(connection.readyState);
    }
  })
  .catch((err) => {
    console.log(err.message);
  });
