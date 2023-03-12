
const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middlewares/auth')

const upload = require('../middlewares/up');


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
router.get("/profile",ensureAuth, userContrller.profile)

//  GET /profile/edit/:id
router.put('/edit', ensureAuth,upload.single('image'), userContrller.editProfile)

router.put('/:user.id', ensureAuth, userContrller.editPro)
// showUsersMyProfile
router.get("/:_id/profile",ensureAuth, userContrller.showUsersMyProfile)


// router.get("/:_id/profile",ensureAuth, userContrller.showUsersMyProfile)


// Logout
router.get("/logout", userContrller.logout);




module.exports = router