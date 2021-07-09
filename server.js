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

app.get("/", (req, res) => {
  res.sendFile("Hello world"); 
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

app.get("/find/:id", (req, res) => {
  db.workout.findOne(
    {
      _id: mongojs.ObjectId(req.params.id)
    },
    (error, data) => {
      if (error) {
        res.send(error);
      } else {
        res.send(data);
      }
    }
  );
});

app.listen(3000, () => {
  console.log("App running on port 3000!");
});
