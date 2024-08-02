// Import the required modules
import express from "express";

// Import your helper functions for your first resource here
import {
  getMagicalBeasts,
  getBeastById,
  addNewBeast,
  updateBeastById,
  deleteBeastById,
} from "./magical_beasts.js";


// Import your helper functions for your second resource here
import {
  getAnimalCare,
  getAnimalCareById,
  createAnimalCare,
  updateAnimalCareById,
  deleteAnimalCareById,
} from "./animal_care.js";


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
  const id = req.params.id;
  const data = await getBeastById(id);

  res.status(200).json({ status: "success", data: data });
  //ADD ERROROS
});

// Endpoint to create a new <resource_one>
app.post("/magical_beasts/", async function (req, res) {
  const data = req.body;
  const beast = await addNewBeast(data);
  
  res.status(201).json({ status: "success", data: beast });

});

// Endpoint to update a specific <resource_one> by id
app.patch("/magical_beasts/:id", async function (req, res) {
  const data = req.body;
  const beast = await updateBeastById(data, req.params.id);
  res.status(201).json({ status: "success", data: beast });

});

// Endpoint to delete a specific <resource_one> by id
app.delete("/magical_beasts/:id", async function (req, res) {
});




// Animal care Route Handlers

// Endpoint to retrieve all animal care data
app.get("/animal_care/", async function (req, res) {
  const requestedData = await getAnimalCare();
  res.status(200).json({status: "success", data: requestedData });
  });
  
  // Endpoint to retrieve animal care by id
  app.get("/animal_care/:id", async function (req, res) {
    const id = req.params.id;
    const requestedData = await getAnimalCareById(id);   
    res.status(200).json({ status: "success", data: requestedData });
  });
  
  // Endpoint to create new animal care data
  app.post("/animal_care/", async function (req, res) {
    const requestedData = await createAnimalCare(req.body);
    res.status(201).json({ status: "success", data: requestedData });
  });
  
  // Endpoint to update a specific <resource_twos> by id
  app.patch("/animal_care/:id", async function (req, res) {
    const id = req.params.id;
    const data = req.body;
    const requestedData = await updateAnimalCareById(id, data);
    res.status(200).json({ status: "success", data: requestedData });
  });
  
  // Endpoint to delete a specific <resource_twos> by id
  app.delete("/animal_care/:id", async function (req, res) {
  });




// Start the server and listen on the specified port
app.listen(PORT, function () {
  console.log(`Server listening on port ${PORT}`);
});