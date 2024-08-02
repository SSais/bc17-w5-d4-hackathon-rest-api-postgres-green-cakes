
// Import the 'pool' object so our helper functions can interact with the PostgreSQL database
import { pool } from "./db/index.js";

export async function getMagicalBeasts() {
  
  const queryText = "SELECT * FROM magical_beasts";
  const result = await pool.query(queryText);
  
  return result.rows;
}

export async function getBeastById(id) {
 
  const queryText = "SELECT * FROM magical_beasts WHERE id = $1";
 
  const result = await pool.query(queryText, [id]);

  return result.rows[0] || null;
}

export async function addNewBeast(newEntry) {

  const { name, description } = newEntry;

  const insertText = "INSERT INTO magical_beasts (name, description) VALUES ($1, $2) RETURNING *";
  const result = await pool.query(insertText, [name, description]);

  return result.rows[0] || null;
}

export async function updateBeastById(updates, id) {

  const { name, description } = updates;

  const updateText = "UPDATE magical_beasts SET name = $1, description = $2 WHERE id = $3 RETURNING *";
  const result = await pool.query(updateText, [name, description, id]);

  return result.rows[0] || null;

}

export async function deleteBeastById(id) {
  // Query the database to delete the resource and return the deleted resource or null
}