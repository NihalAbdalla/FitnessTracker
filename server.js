const express = require("express");
const app = express();
const mongoose = require('mongoose');
const bodyParser = require("body-parser");
const path = require("path");

const databaseUrl = "fitness";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect("mondogdb://localhost:3000/workoutDB",{useNewUrlParser: true, useUnifiedTopology: true,}); 

db.on("error", error => {
  console.log("Database Error:", error);
});

app.post("/submit", ({ body }, res) => {
  db.workout.save(workout, (error, saved) => {
    if (error) {
      console.log(error);
    } else {
      res.send(saved);
    }
  });
});

app.get("/", (req, res) => {
  res.sendFile(""); 
});

app.get("/all", (req, res) => {
  db.workout.find({}, (err, found) => {
    if (err) {
      console.log(err);
    } else {
      res.json(found);
    }
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
