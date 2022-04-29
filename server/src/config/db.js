require('dotenv').config('.env')
const mongoose = require('mongoose');

//const db = process.env.MONGO_URI;
//const db = process.env.MONGO_URL;
const db = "mongodb://db:27017/Plant-IoT";

const connectDB = async () => {
  try {
    await mongoose.connect(
      db,
      {
        useNewUrlParser: true
      }
    );

    console.log('MongoDB is Connected...');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
