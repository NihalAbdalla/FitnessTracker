const express = require("express");
const mongojs = require("mongojs");

const app = express();

const databaseUrl = "fitness";
const collections = ["workout"];

const db = mongojs(databaseUrl, workoutCollections);

db.on("error", error => {
  console.log("Database Error:", error);
});

app.get("/", (request, response) => {
  res.send("");
});

app.get("/all", (request, response) => {
  db.workout.find({}, (error, found) => {
    if (err) {
      console.log(error);
    } else {
      res.json(found);
    }
  });
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
