const express = require('express');
const router = express.Router();
const adminContrller = require('../controllers/adminContrller');
const { ensureAuth } = require('../middlewares/auth');
const { admin } = require('../middlewares/userType');
const checkObjectId = require('../middlewares/checkObjectId');

// Admin-only routes
router.get('/showreport', ensureAuth, admin, adminContrller.showreport);
router.put('/reports/:id/dismiss', ensureAuth, admin, checkObjectId('id'), adminContrller.dismissReport);
router.get('/showcontacts', ensureAuth, admin, adminContrller.showcontact);

module.exports = router;
