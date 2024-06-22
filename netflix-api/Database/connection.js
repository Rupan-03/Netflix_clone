const mongoose = require('mongoose');
require('dotenv').config();

function DBConnect(){
    mongoose.connect(process.env.MONGOURI)
    .then(() => {
    console.log("DB Connection Successfull");
  })
  .catch((err) => {
    console.log(err.message);
  });
}

module.exports = DBConnect;