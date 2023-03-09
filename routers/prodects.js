
const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middlewares/auth')
const upload = require('../middlewares/up');
const checkObjectId = require('../middlewares/checkObjectId');


const prodectsContrller = require('../controllers/prodectsContrller');



// add prodect 
router.get('/add-prodect', ensureAuth, prodectsContrller.addprodect)

// add prodect
router.post('/add-prodect', ensureAuth, upload.single('image'), prodectsContrller.addproPost)

// show my prodectes
router.get('/myProdects', ensureAuth, prodectsContrller.showMyPro)

// add comment
router.post('/:id/addcomment', ensureAuth, prodectsContrller.addComment)

router.delete('/comment/:id/:comment_id',ensureAuth, prodectsContrller.deleteComment)

// add favorite
router.put('/:id/favorite', ensureAuth, prodectsContrller.Favorite)

//  unfavorite
router.put('/:id/unfavorite', ensureAuth, prodectsContrller.unFavorite)


// report
router.post('/:id/report', ensureAuth, prodectsContrller.addreport)
router.post('/:id/favorite', ensureAuth, prodectsContrller.addfavorite)

// Favorite
router.get('/myfav', ensureAuth, prodectsContrller.showMyFav)

// show one prodecte detail
router.get('/:id', prodectsContrller.showOnePro)


// delete my prodect
router.delete('/:id', ensureAuth, prodectsContrller.deletePro)
// checkObjectId('id')

module.exports = router

