
const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middlewares/auth')
const upload = require('../middlewares/up');
const checkObjectId = require('../middlewares/checkObjectId');


const prodectsContrller = require('../controllers/prodectsContrller');



// add prodect 
router.get('/add-prodect', ensureAuth, prodectsContrller.addprodect)

// add prodect
router.post('/add-prodect', ensureAuth, upload.any('image', 3), prodectsContrller.addproPost)

// show my prodectes
router.get('/myProdects', ensureAuth, prodectsContrller.showMyPro)

// add favorite
router.put('/:id/favorite', ensureAuth, prodectsContrller.Favorite)

//  unfavorite
router.put('/:id/unfavorite', ensureAuth, prodectsContrller.unFavorite)

// show one prodecte detail
router.get('/:id', prodectsContrller.showOnePro)


// report
router.put('/:id/report', ensureAuth, prodectsContrller.addreport)


// Favorite
router.get('/myfav', ensureAuth, prodectsContrller.showMyFav)



// delete my prodect
router.delete('/:id', ensureAuth, prodectsContrller.deletePro)
// checkObjectId('id')

module.exports = router

