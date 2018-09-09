const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/forensic', { useMongoClient: true });

const db = mongoose.connection;

db.on('error', () => {
  console.log('mongoose connection error!');
});

db.on('open', () => {
  console.log('mongoose connection open!');
});

const forensicSchema = mongoose.Schema({
  // define schema properties here
});

const Forensic = mongoose.model('Forensic', forensicSchema);

// create db functions here and export them
module.exports = {};
