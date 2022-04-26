const express = require("express");

// plantRoutes is an instance of the express router.
// Used to define routes.
// The router will be added as a middleware and will take control of requests starting with path /plant.
const plantRoutes = express.Router();

// Connect to the database
const dbo = require("../db/conn");

// Convert the id from string to ObjectId for the _id.
const ObjectId = require("mongodb").ObjectId;


// List all the plants
recordRoutes.route("/plant").get(function (req, res) {
  let db_connect = dbo.getDb("employees");
  db_connect
    .collection("plants")
    .find({})
    .toArray(function (err, plant) {
      if (err) throw err;
      res.json(plant);
    });
});

// Get a single plant by id
recordRoutes.route("/plant/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect
      .collection("plants")
      .findOne(myquery, function (err, plant) {
        if (err) throw err;
        res.json(plant);
      });
});

// Create a new plant.
recordRoutes.route("/plant/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    name: req.body.name,
    position: req.body.position,
    level: req.body.level,
  };
  db_connect.collection("plants").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// Update a plant by id.
recordRoutes.route("/update/:id").post(function (req, response) {
  let db_connect = dbo.getDb();  
  let myquery = { _id: ObjectId( req.params.id )};  
  let newvalues = {    
    $set: {      
        name: req.body.name,     
        position: req.body.position,      
        level: req.body.level,    
    },  
  };
});

// Delete a plant by id.
recordRoutes.route("/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId( req.params.id )};
  db_connect.collection("records").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});

module.exports = recordRoutes;