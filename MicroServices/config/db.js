const mongoose = require("mongoose");
const dotenv = require("dotenv")
dotenv.config();
const MONGODB = process.env.MONGODB_URL;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGODB || "");
    console.log(`Mongodb connected sucessfully ${MONGODB}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;
