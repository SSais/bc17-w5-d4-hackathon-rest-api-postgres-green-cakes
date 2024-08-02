
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getCareInfo() {

  const queryText = "SELECT * FROM animal_care";
  const result = await pool.query(queryText);

  return result.rows;
}

export async function getCaraInfoById(id) {
  
  const queryText = "SELECT * FROM animal_care WHERE id = $1";
  const result = await pool.query(queryText, [id]);

  return result.rows[0] || null;
}

export async function addNewInfo(resource) {
  
  const { location, favorite, dislikes } = resource

  const insertText = "INSERT INTO animal_care (location, favorite, dislikes) VALUES ($1, $2, $3) RETURNING *";
  const result = await pool.query(insertText, [location, favorite, dislikes]);

  return result.rows[0] || null;
}

export async function updateInfoById(id, updates) {
  // Query the database to update the resource and return the newly updated resource or null
}

export async function deleteInfoById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}