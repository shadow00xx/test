
const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middlewares/auth')



const userContrller = require('../controllers/userContrller');



// login
router.get("/login", ensureGuest, userContrller.login)

// signup
router.get("/signup", ensureGuest, userContrller.signup)

// signup
router.post("/signup", userContrller.signupPost)

// login
router.post('/login', userContrller.loginPost);

// profile
router.get("/profile", ensureAuth, userContrller.profile)

//  GET /profile/edit/:id
router.put('/edit', ensureAuth, userContrller.editProfile)


// Logout
router.get("/logout", userContrller.logout);




module.exports = router