
const path = require('path');
const express = require('express');
const router = express.Router();
const User = require('../models/User')
const passport = require('passport');
const bcrypt = require('bcryptjs');
const { ensureAuth } = require('../middlewares/auth')
const flash = require('connect-flash');
const prodects = require('../models/Prodects')
const upload = require('../middlewares/upload');
const fs = require('fs');


// add prodect 
router.get('/add-prodect', ensureAuth, (req, res) => {
    res.render('add_prodect', { title: 'اضافه سلعه' })
})



// add prodect
router.post('/add-prodect', ensureAuth, upload.single('image'), async (req, res, next) => {

    try {
        req.body.user = req.user.id
        const prodect = req.body


        // x = {
        //     // title: req.body.title,
        //     // body: req.body.body,
        //     // prise: req.body.prise,
        //     // user: req.user.id,
        //     // catogery: req.body.catogery


        // }

        if (req.file) {
            prodect.image = req.file.filename

        }


        const x = await new prodects(prodect)
        await x.save()
        console.log(x);

        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
})

// show my prodectes

router.get('/myProdects', ensureAuth, async (req, res) => {
    try {
        // const user = User.findById({ })
        const march = await prodects.find({ user: req.user.id })
            .populate('user')
            .sort({ createdAt: 'desc' })
        res.render('myProdects', { march, title: 'منتجاتي ' })


    } catch (err) {
        console.log(err);
    }
})



// show one prodecte detail

router.get('/:_id', async (req, res) => {
    try {
        // const user = User.findById({ })
        const e = await prodects.findOne({ _id: req.params._id })
            .populate('user')

        res.render('pages/prodect', { e, title: 'منتجاتي ' })


    } catch (err) {
        console.log(err);
    }
})
// @desc    edit prodect
// @route   PUT /stories/:id


// router.put('/edit:id', ensureAuth, async (req, res) => {
//     try {
//         let e = await Story.findById(req.params.id).lean()

//         if (!story) {
//             return res.render('error/404')
//         }

//         if (story.user != req.user.id) {
//             res.redirect('/stories')
//         } else {
//             story = await Story.findOneAndUpdate({ _id: req.params.id }, req.body, {
//                 new: true,
//                 runValidators: true,
//             })

//             res.redirect('/dashboard')
//         }
//     } catch (err) {
//         console.error(err)
//         return res.render('error/500')
//     }
// })


// delete my prodect

router.delete('/:_id', ensureAuth, async (req, res) => {
    try {

        let e = await prodects.findByIdAndRemove({ _id: req.params._id })
            .populate('user')
            .lean()
        if (!e) {
            res.render('error/500')

        }
        else {
            console.log(e);
            res.render('pages/prodect', { e, title: 'منتجاتي ' })

        }


    } catch (err) {
        console.log(err);
        // res.render('error/500')
    }
})

module.exports = router
