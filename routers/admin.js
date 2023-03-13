const express = require('express');
const router = express.Router();
const adminContrller = require('../controllers/adminContrller')
const {admin, } = require('../middlewares/userType')






// showreport
router.get('/showreport', adminContrller.showreport);


// showcontacts
router.get('/showcontacts', adminContrller.showcontact);



module.exports = router
