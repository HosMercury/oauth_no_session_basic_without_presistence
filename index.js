const express = require('express');
const app = express();
const passport = require('passport');
app.use(passport.initialize());

require('./passport');

app.get('/', (req, res) => {
  res.send('<a href="/auth/google">Log in with ==> google</a>');
});

app.get(
  '/auth/google',
  passport.authenticate('google', { scope: ['profile'] })
);

app.get(
  '/auth/google/callback',
  passport.authenticate('google', { failureRedirect: '/login' }),
  function (req, res) {
    // Successful authentication, redirect home.
    res.redirect('/');
  }
);

app.listen(3000, () => console.log('http://localhost:3000'));
