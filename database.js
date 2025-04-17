const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./school.db');

// Create tables (like drawers in a toy box)
db.serialize(() => {
  // Users table
  db.run(`CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    email TEXT UNIQUE,
    password TEXT,
    role TEXT
  )`);

  // Assignments table
  db.run(`CREATE TABLE IF NOT EXISTS assignments (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT,
    due_date TEXT,
    teacher_id INTEGER
  )`);
});

module.exports = db;