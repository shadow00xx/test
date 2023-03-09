const express = require('express');
const router = express.Router();
const adminContrller = require('../controllers/adminContrller')
const {admin, } = require('../middlewares/userType')









// showcontacts
router.get('/showcontacts', adminContrller.showcontact);

// showreport
router.get('/showreport', adminContrller.showreportx);

module.exports = router
