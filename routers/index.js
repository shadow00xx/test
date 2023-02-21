const express = require('express');
const router = express.Router();
const indexContrller = require('../controllers/indexContrller')

// landing page
router.get("/", indexContrller.landingPage)

// searching
router.post("/search", indexContrller.search)

// store
router.get('/stores', indexContrller.store)

// last
router.get('/latest', indexContrller.exploreLatest)

// serveces
router.get('/serveces', indexContrller.serveces)

// about page
router.get('/about', indexContrller.about)

// term page
router.get('/term', indexContrller.terms)

router.get('/categories', indexContrller.exploreCategories);
router.get('/categories/:id', indexContrller.exploreCategoriesById);
module.exports = router