const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/studentDB");
    console.log("MongoDB Connected" );
  } 
  catch (error) {
    console.error(`MongoDB connection error`);
    process.exit(1);
  }
};

module.exports = connectDB;