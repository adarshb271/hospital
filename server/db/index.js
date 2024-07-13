const mongoose = require('mongoose');
mongoose
  .connect('mongodb://localhost:27017/hospitalDB')
  .then(() => {
    console.log('db conneted');
  })
  .catch(() => {
    console.log('error');
  });
module.exports = mongoose;
