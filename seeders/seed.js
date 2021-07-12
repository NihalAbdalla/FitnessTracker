const mongoose = require('mongoose');
const db = require('../models'); 

let workoutSchema = mongoose.Schema({

});

let workoutSchema = new Schema({
  first_name: {
    type: String,
    trim: true,
    required: "enter a first name",
  },
  last_name: {
    type: String,
    trim: true,
    required: "enter a last name",
  },
  username: {
    type: String,
    trim: true,
    required: "Enter username",
  },
  email: {
    type: String,
    trim: true,
    unique: true,
    match: [/.+@.+\..+/, "Please enter a valid e-mail address"],
  },
  password: {
    type: String,
    trim: true,
    required: "Enter password",
  },
  date_of_birth: {
    type: Date,
    default: Date.now(),
  },
  Running: {
    type: String,
    duration: 40,
  },
  cycling: {
    type: String,
    duration: 20,
});

const workout = mongoose.model("workout", workoutSchema);

module.exports = workout;