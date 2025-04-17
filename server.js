// 1. Load tools
const express = require('express');
const session = require('express-session');
const path = require('path');
const app = express();

// 2. Setup database (SQLite)
const db = require('./database.js');

// 3. Make the server work
app.use(express.static('public'));
app.set('view engine', 'ejs');
app.use(express.urlencoded({ extended: true }));
app.use(session({
  secret: 'school_secret',
  resave: false,
  saveUninitialized: true
}));

// 4. Routes
app.use('/', require('./routes/auth'));
app.use('/', require('./routes/assignments'));

// 5. Start the server
app.listen(3000, () => {
  console.log("Server is running! 🚀 http://localhost:3000");
});