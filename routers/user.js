const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../models/User')
const passport = require('passport');
const bcrypt = require('bcryptjs');
const { ensureAuth, ensureGuest } = require('../middlewares/auth')
const flash = require('connect-flash');
const prodects = require('../models/Prodects')
const upload = require('../middlewares/upload');
const fs = require('fs');

let errors = []



// login
router.get("/login", ensureGuest, (req, res) => {
  res.render('pages/login', { title: ' تسجيل الدخول' })
})

// signup
router.get("/signup", ensureGuest, (req, res) => {
  res.render('pages/signup', { title: ' التسجيل' })
})


// signup

router.post("/signup", async (req, res) => {


  try {
    const { name, username, password } = req.body

    const user = await User.findOne({ username: username })
    if (user) {
      errors.push({ msg: 'user exist' })

      res.render('signup', {
        errors
      })
    } else {
      const newUser = await new User({ name, username, password, })
      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, async (err, hash) => {
          if (err) throw err;
          newUser.password = hash
          console.log(newUser)
          await newUser.save()
        })
      })
      req.flash(
        'success_msg',
        'You are now registered'
      );
      res.redirect('/user/login')
    }
  } catch (err) {
    console.log(err)
  }
})

// login

router.post('/login', (req, res, next) => {
  passport.authenticate('local', {
    successRedirect: '/',
    failureRedirect: '/user/login',
    failureFlash: true
  })(req, res, next);
});

// profile
router.get("/profile", ensureAuth, async (req, res) => {
  try {

    const user = await User.find({ _id: req.user.id }).lean()

    res.render('profile', { user, title: 'الملف الشخصي' })

  } catch (err) {
    console.log(err);
  }

})
// @desc    Show edit page
// @route   GET /profile/edit/:id

router.put('/edit', ensureAuth, async (req, res) => {
  try {

    let user = await User.find({ _id: req.user.id }).lean()

    user = await User.findOneAndUpdate({ _id: req.user.id }, req.body, {
      new: true,
      runValidators: true,
    })

    res.redirect('/dashboard')
  }
  catch (err) {
    console.error(err)
    return res.render('error/500')
  }
})



router.get('/test', ensureAuth, (req, res) => {
  res.render('error/404')
})


// Logout

router.get("/logout", (req, res) => {
  req.logout(req.user, err => {
    if (err) return next(err);
    res.redirect("/user/login");
  });
});




module.exports = router