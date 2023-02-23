const express = require('express')
const passport = require('passport')
const router = express.Router()

// @desc    Auth with Google
// @route   GET /auth/google
router.get('/google', passport.authenticate('google', { scope: ['profile'] }))

// @desc    Google auth callback
// @route   GET /auth/google/callback
router.get(
  '/google/callback',
  passport.authenticate('google', { failureRedirect: '/user/login' }),
  (req, res) => {
    res.redirect('/')
  }
)

router.get('/facebook', passport.authenticate('facebook', { scope: 'email' }));
router.get(
  '/facebook/callback',
  passport.authenticate('facebook', {
    failureRedirect: '/user/login',
  }),
  function (req, res) {
    // Successful authentication, redirect to success screen.
    res.redirect('/');
  }
);




module.exports = router
