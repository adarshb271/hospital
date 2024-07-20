const mongoose = require('mongoose');
// const Department = require('./department-schema');
const doctorSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },

    image: {
      type: String,
      required: true,
    },

    password: {
      type: String,
    },
    // password: {
    //   type: string,
    // },
    email: {
      type: String,
    },
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Department',
    },
  },
  { timestamps: true }
);
const Doctor = mongoose.model('Doctor', doctorSchema);
module.exports = Doctor;
