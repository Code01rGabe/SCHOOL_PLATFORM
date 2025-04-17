const express = require('express');
const router = express.Router();
const db = require('../database.js');
const bcrypt = require('bcryptjs');

// Login Page
router.get('/login', (req, res) => {
  res.render('login');
});

// Login Check
router.post('/login', (req, res) => {
  const { email, password } = req.body;
  db.get('SELECT * FROM users WHERE email = ?', [email], (err, user) => {
    if (user && bcrypt.compareSync(password, user.password)) {
      req.session.user = user;
      res.redirect('/dashboard');
    } else {
      res.send("Wrong email or password! 😢");
    }
  });
});

module.exports = router;