const express = require('express');
const router = express.Router();
const { ensureAuth, ensureGuest } = require('../middlewares/auth');
const upload = require('../middlewares/up');
const userContrller = require('../controllers/userContrller');

// Login
router.get('/login', ensureGuest, userContrller.login);
router.post('/login', userContrller.loginPost);

// Signup
router.get('/signup', ensureGuest, userContrller.signup);
router.post('/signup', ensureGuest, userContrller.signupPost);

// Profile
router.get('/profile', ensureAuth, userContrller.profile);
router.put('/edit', ensureAuth, upload.single('image'), userContrller.editProfile);
router.get('/:id/profile', ensureAuth, userContrller.showUsersMyProfile);

// Logout
router.get('/logout', ensureAuth, userContrller.logout);

module.exports = router;
