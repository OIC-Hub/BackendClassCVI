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
  },
  {
    timestamp: true,
  }
);

// module.exports =  productSchema
module.exports = mongoose.model('Auth', authSchema);
