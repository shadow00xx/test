
const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middlewares/auth')
const upload = require('../middlewares/up');

const prodectsContrller = require('../controllers/prodectsContrller')


// add prodect 
router.get('/add-prodect', ensureAuth, prodectsContrller.addprodect)

// add prodect
router.post('/add-prodect', ensureAuth, upload.single('image'), prodectsContrller.addproPost)

// show my prodectes
router.get('/myProdects', ensureAuth, prodectsContrller.showMyPro)

// show one prodecte detail
router.get('/:_id', prodectsContrller.showOnePro)

// delete my prodect
router.delete('/:_id', ensureAuth, prodectsContrller.deletePro)

// router.get('/cars', prodectsContrller.cars)
module.exports = router

