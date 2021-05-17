const express = require('express');

const router = express.Router();
const passport = require('passport');

// gets and displays a login page
router.get('/adminsignin', (req, res) => {
  res.render('adminSignIn');
});

// process the username and password
router.post('/adminsignin', passport.authenticate('local'), (req, res) => {
  req.session.user = req.user;
  res.redirect('/dashboard');
});
module.exports = router;
