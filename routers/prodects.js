const express = require('express');
const router = express.Router();
const { ensureAuth } = require('../middlewares/auth');
const upload = require('../middlewares/up');
const checkObjectId = require('../middlewares/checkObjectId');
const prodectsContrller = require('../controllers/prodectsContrller');

router.get('/add-prodect', ensureAuth, prodectsContrller.addprodect);
router.post('/add-prodect', ensureAuth, upload.array('image', 3), prodectsContrller.addproPost);
router.get('/myProdects', ensureAuth, prodectsContrller.showMyPro);

router.get('/:id', checkObjectId('id'), prodectsContrller.showOnePro);
router.put('/:id/favorite', ensureAuth, checkObjectId('id'), prodectsContrller.Favorite);
router.put('/:id/unfavorite', ensureAuth, checkObjectId('id'), prodectsContrller.unFavorite);
router.put('/:id/report', ensureAuth, checkObjectId('id'), prodectsContrller.addreport);
router.delete('/:id', ensureAuth, checkObjectId('id'), prodectsContrller.deletePro);

module.exports = router;
