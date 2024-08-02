
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getAnimalCare() {
  // Query the database and return all animal care
   const queryText = "SELECT * FROM animal_care";

   // Use the pool object to send the query to the database
   const result = await pool.query(queryText);
 
   // The rows property of the result object contains the retrieved records
   return result.rows;
}

export async function getAnimalCareById(id) {
  // Query the database and return one animal care with a matching id or null
  const queryText = "SELECT * FROM animal_care WHERE id = $1";

  const result = await pool.query(queryText, [id]);

  return result.rows[0] || null;
}

export async function createAnimalCare(resource) {
  // Query the database to create an resource and return the newly created resource
  const {location, favorite, dislikes, beast_id} = resource;

  const insertText = "INSERT INTO animal_care (location, favorite, dislikes, beast_id) VALUES ($1, $2, $3, $4) RETURNING *";

  const result = await pool.query(insertText, [location, favorite, dislikes, beast_id]);

  return result.rows[0] || null;
}

export async function updateAnimalCareById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
  const {location, favorite, dislikes} = updates;

  //not beast id as its a primary key
  const updateText = "UPDATE animal_care SET location = $1, favorite = $2, dislikes = $3 WHERE id = $4 RETURNING *";

  const result = await pool.query(updateText, [location, favorite, dislikes, id]);

  return result.rows[0] || null;
}

export async function deleteAnimalCareById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}