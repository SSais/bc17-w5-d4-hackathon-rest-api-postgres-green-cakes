// Import the required modules
import express from "express";



// Import your helper functions for your first resource here
import {
  getMagicalBeasts,
  createResourceOne,
  updateResourceOneById,
  deleteResourceOneById,
} from "./magical_beasts.js";


// Import your helper functions for your second resource here
// import {
//   getResourceTwo,
//   getResourceTwoById,
//   createResourceTwo,
//   updateResourceTwoById,
//   deleteResourceTwoById,
// } from "./resource_two.js";



// Initialize the express app
const app = express();
// Retrieve the port number from environment variables
const PORT = process.env.PORT;

app.use(express.json()); // express.json() middleware is used to parse incoming JSON requests




// Resource One Route Handlers

// Endpoint to retrieve all <resource_one>
app.get("/magical_beasts/", async function (req, res) {
    const data = await getMagicalBeasts();
    res.status(200).json({status: "success", data: data });
});

// Endpoint to retrieve a <resource_one> by id
app.get("/magical_beasts/:id", async function (req, res) {
  
});

// Endpoint to create a new <resource_one>
app.post("/magical_beasts/", async function (req, res) {
});

// Endpoint to update a specific <resource_one> by id
app.patch("/magical_beasts/:id", async function (req, res) {
});

// Endpoint to delete a specific <resource_one> by id
app.delete("/magical_beasts/:id", async function (req, res) {
});




// Resource Two Route Handlers

// Endpoint to retrieve all <resource_twos>
app.get("/resourcetwo/", async function (req, res) {
    const authors = await getAuthors();
    res.status(200).json({ status: "success", data: authors });
  });
  
  // Endpoint to retrieve a <resource_twos> by id
  app.get("/resourcetwo/:id", async function (req, res) {
  });
  
  // Endpoint to create a new <resource_twos>
  app.post("/resourcetwo/", async function (req, res) {
  });
  
  // Endpoint to update a specific <resource_twos> by id
  app.patch("/resourcetwo/:id", async function (req, res) {
  });
  
  // Endpoint to delete a specific <resource_twos> by id
  app.delete("/resourcetwo/:id", async function (req, res) {
  });





// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});