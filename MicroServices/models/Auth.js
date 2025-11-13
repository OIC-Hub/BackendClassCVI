const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },
    phoneNo: {
      type: Number,
      require: true,
    },
    role: {
      type: String,
      enum: ["user", "admin"],
      require: true,
      default: "user",
    },
    otp: {
      type: String,
      require: false,
    },
    Isverify: {
      default: false,
      type: Boolean,
    }

  },
  {
    timestamp: true,
  }
);

// module.exports =  productSchema
module.exports = mongoose.model('Auth', authSchema);
