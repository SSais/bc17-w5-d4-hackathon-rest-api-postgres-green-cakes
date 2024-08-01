import { pool } from "../index.js";



// >>> MAKE SURE YOU UNDERSTAND THIS FILE AND WHAT IT'S DOING <<<
// >>> FEEL FREE TO CHANGE IT TO MAKE YOUR OWN RESOURCES (TABLES AND PROPERTIES) - YOU DON'T HAVE TO USE ALBUMS AND ARTISTS <<<



async function resetDatabase() {
  try {
    // Drop existing tables if they exist
    await pool.query(`
        DROP TABLE IF EXISTS magical_beasts CASCADE;
        DROP TABLE IF EXISTS animal_care CASCADE;
    `);

    // Create the artists table
    await pool.query(`
        CREATE TABLE magical_beasts (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            name VARCHAR(255) NOT NULL,
            description VARCHAR(255) NOT NULL
        );
    `);

    // Create the animal table - (future note =  ON delete CASCADE)
    await pool.query(`
        CREATE TABLE animal_care (
            id INT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
            location VARCHAR(255) NOT NULL,
            favorite  VARCHAR(255) NOT NULL,
            dislikes  VARCHAR(255) NOT NULL,
            beast_id INT REFERENCES magical_beasts(id)
        );
    `);

    // Seed the magical_beasts table
    await pool.query(`
        INSERT INTO magical_beasts (name, description)
        VALUES 
            ('Niffler', 'small furry kleptomaniac'),
            ('Phoenix', 'medium sized red bird that is reborn form ashes');
    `);

    // Seed the animal_care table
    await pool.query(`
        INSERT INTO animal_care (location, favorite, dislikes, beast_id)
        VALUES 
            ('Forbibben forest', 'Gold Ball', 'Hippogriffs', 1),
            ('Poidsear Coast', 'Quaffle', 'Fwoopers', 2);
    `);

    console.log("Database reset successful");
  } catch (error) {
    console.error("Database reset failed: ", error);
  } finally {
    // End the pool
    await pool.end();
  }
}

await resetDatabase();
