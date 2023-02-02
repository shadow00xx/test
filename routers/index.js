const express = require('express');
const router = express.Router();
const prodects = require('../models/Prodects')
const User = require('../models/User')
const { ensureAuth, ensureGuest } = require('../middlewares/auth')

// landing page

router.get("/", async (req, res) => {
    try {
        const march = await prodects.find()
            .populate('user')
            .sort({ createdAt: 'desc' })
            .lean()

        res.render('index', { march, title: 'دلالة' })
    } catch (err) {
        console.log(err)
        res.render('error/500')
    }
})


// about page

router.get('/about', (req, res) => {
    res.render('pages/about', { title: 'من نحن' })
})





module.exports = router