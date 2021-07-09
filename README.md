# FitnessTracker

Creating CRUD using MongoDB

step 1: install npm i express

step 2: open terminal with mongod

step 3: npm i mongodb, npm i mongoose, npm i body-parser

step 4: open another terminal to run mongo

step 5: create all folders and files

step 6: create database workout

> use workoutDB
> switched to db workoutDB
> db.lightworkouts.insertMany([{id: 1, name: ["Yoga", "Running"]}])
> {

    "acknowledged" : true,
    "insertedIds" : [
    	ObjectId("60e3a2dc1cb61db7c3c5b0c9")
    ]

}

> db.heavyworkouts.insertMany([{id: 2, name: ["Cardio", "Boxing"]}])
> {

    "acknowledged" : true,
    "insertedIds" : [
    	ObjectId("60e3a31b1cb61db7c3c5b0ca")
    ]

}

>
