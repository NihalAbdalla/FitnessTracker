const express = require("express");
const app = express();
const mongojs = require("mongojs");
const path = require("path");

const databaseUrl = "fitness";
const collections = ["workouts"];

const db = mongojs(databaseUrl, collections);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

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
