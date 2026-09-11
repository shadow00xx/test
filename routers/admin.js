const express = require('express');
const router = express.Router();
const adminContrller = require('../controllers/adminContrller');
const { ensureAuth } = require('../middlewares/auth');
const { admin } = require('../middlewares/userType');

// Admin-only routes
router.get('/showreport', ensureAuth, admin, adminContrller.showreport);
router.get('/showcontacts', ensureAuth, admin, adminContrller.showcontact);

module.exports = router;
