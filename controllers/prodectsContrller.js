
const prodects = require('../models/Prodects')
const cloudinary = require("../utils/cloudinary");
const fs = require('fs');
// get
// add prodect 

exports.addprodect = (req, res) => {
    res.render('add_prodect', { title: 'اضافه سلعه' })
}

// post
// add prodect 

// const uploder = async(path)=>{
//     await cloudinry.uplouds(path, 'Images')

//     if (req.method === 'post') {
//         const urls = []
//         prodect.image = req.file.filename

//     }
// }


exports.addproPost = async (req, res, next) => {

    try {
        req.body.user = req.user.id
        const prodect = req.body
        if (req.file) {
            prodect.image = req.file.filename

        }

        const result = await cloudinary.uploader.upload(req.file.path)
        if (prodect.cloudinary_id) {
         cloudinary_id: result.public_id
    
        }
        const x = await new prodects(prodect)
        await x.save()
        console.log(x);

        res.redirect('/')
    } catch (err) {
        console.log(err);
    }
}

// get
// show my prodectes

exports.showMyPro = async (req, res) => {
    try {
        // const user = User.findById({ })
        const march = await prodects.find({ user: req.user.id })
            .populate('user')
            .sort({ createdAt: 'desc' })
        res.render('myProdects', { march, title: 'منتجاتي ' })


    } catch (err) {
        console.log(err);
    }
}

// get
// show one prodecte detail

exports.showOnePro = async (req, res) => {
    try {
        // const user = User.findById({ })
        const e = await prodects.findOne({ _id: req.params._id })
            .populate('user')

        res.render('pages/prodect', { e, title: 'منتجاتي ' })


    } catch (err) {
        console.log(err);
    }
}

// delete
// delete my prodects

exports.deletePro = async (req, res) => {
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
}


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


