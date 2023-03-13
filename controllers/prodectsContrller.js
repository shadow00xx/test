// const path = require('path')
const mongoose = require("mongoose");
const prodects = require('../models/Prodects')
const User = require('../models/User')
const cloudinary = require("../utils/cloudinary");

const fs = require('fs');

// get
// add prodect 
exports.addprodect = (req, res) => {
    res.render('add_prodect', { title: 'اضافه سلعه' })
}

// post
// add prodect 
exports.addproPost = async (req, res, next) => {

    try {
        
        const prodect = req.body
        let imageURIs = []
        let image = req.files

        if (image) {
            let multiplePicturePromise = image.map((picture) =>
                cloudinary.uploader.upload(picture.path))
            let imageResponses = await Promise.all(multiplePicturePromise);
            imageResponses.map(x => {
                const urls = x.secure_url
                imageURIs.push(urls)
            })
        }

        if (req.files) {
            prodect.image = imageURIs
        }

        const x = await new prodects(prodect)
        await x.save()
        res.redirect('/')
    } catch (err) {
        console.log(err);
        res.render('error/500')

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
        res.render('error/500')

    }
}

// post
// addComment
exports.addComment = async (req, res) => {
    try {
        const user = await User.findById(req.user.id).select('-password');
        const post = await prodects.findById(req.params.id);

        const newComment = {
            text: req.body.text,
            name: user.displayName,
            avatar: user.image,
            createby: req.user.id
        };

        post.comments.unshift(newComment);

        await post.save();

        res.json(post.comments);
    } catch (err) {
        console.log(err);
        res.render('error/500')
    }
}

// delete Comment
exports.deleteComment = async (req, res) => {
    try {
        const post = await prodects.findById(req.params.id);

        // Pull out comment
        const comment = post.comments.find(
            (comment) => comment.id === req.params.comment_id
        );
        // Make sure comment exists
        if (!comment) {
            return res.status(404).json({ msg: 'Comment does not exist' });
        }
        // Check user
        if (comment.createdby.toString() !== req.user.id) {
            return res.status(401).json({ msg: 'User not authorized' });
        }

        post.comments = post.comments.filter(
            ({ id }) => id !== req.params.comment_id
        );

        await post.save();

        return res.json(post.comments);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send('Server Error');
    }
}

// exports.addComment = async(req, res)=>{
//     let prodect_id=req.params._id;
// 	if(!mongoose.Types.ObjectId.isValid(prodect_id)){
// 		return res.status(400).send({
// 	  		message:'Invalid prodect id',
// 	  		data:{}
// 	  	});
// 	}
// 	prodects.findOne({_id:prodect_id}).then(async (blog)=>{
// 		if(!blog){
// 			return res.status(400).send({
// 				message:'No prodect found',
// 				data:{}
// 			});	
// 		}else{

// 			try{


//                 let comment = new comments({
//                     text:req.body.text,
//                     prodect_id:prodect_id,
//                     createby:req.user._id})

// 				let commentData=await comment.save();

// 				await prodects.updateOne(
// 					{_id:prodect_id},
// 					{
// 						$push: { comments :commentData._id  } 
// 					}
// 				)


// 				let query=[
// 					{
// 						$lookup:
// 						{
// 						 from: "users",
// 						 localField: "user_id",
// 						 foreignField: "_id",
// 						 as: "user"
// 						}
// 					},
// 					{$unwind: '$user'},
// 					{
// 						$match:{
// 							'_id':mongoose.Types.ObjectId(commentData._id)
// 						}
// 					},

// 				];

// 				let comments=await BlogComment.aggregate(query);

// 				return res.status(200).send({
// 					message:'Comment successfully added',
// 					data:comments[0]
// 				});


// 			}catch(err){
// 				return res.status(400).send({
// 			  		message:err.message,
// 			  		data:err
// 			  	});
// 			}


// 		}
// 	}).catch((err)=>{
// 		return res.status(400).send({
// 	  		message:err.message,
// 	  		data:err
// 	  	});
// 	})

// }




// get
// show one prodecte detail

exports.showOnePro = async (req, res) => {
    try {
        const post = await prodects.findById(req.params._id);


        const x = post.Favorite.some((like) => like.toString() === req.user.id)
        const e = await prodects.findOne({ _id: req.params._id })
            .populate('user')

        res.render('pages/prodect', { e, x, title: e.name, })

    } catch (err) {
        console.log(err);
        res.render('error/500')

    }
}

// delete
// delete my prodects
exports.deletePro = async (req, res) => {
    try {


        await prodects.findByIdAndRemove({ _id: req.params.id })

        res.redirect('/prodects/myProdects')
    } catch (err) {
        console.log(err);
        res.render('error/500')
    }
}

// Favorite 
// put 
exports.Favorite = async (req, res) => {
    try {
        const post = await prodects.findById(req.params.id);

        // Check if the post has already been liked
        if (post.Favorite.some((like) => like.toString() === req.user.id)) {
            // return res.status(400).json({ msg: 'Post already liked' });
            req.flash(
                'success_msg',
                '  تمت الاضافه مسبقا')
            res.redirect(`/prodects/${req.params.id}`)
        } else {

            post.Favorite.unshift(req.user.id);

            await post.save();

            req.flash(
                'success_msg',
                ' تمت الاضافه بنجاح');
            res.redirect(`/prodects/${req.params.id}`);
        }


    } catch (err) {
        console.error(err);
        res.render('error/500')
    }
}


// unFavorite 
// put 
exports.unFavorite = async (req, res) => {
    try {
        const post = await prodects.findById(req.params.id);

        // Check if the post has not yet been liked
        if (!post.Favorite.some((like) => like.toString() === req.user.id)) {
            return res.status(400).json({ msg: 'Post has not yet been liked' });
        }

        // remove the like
        post.Favorite = post.Favorite.filter(
            (l) => l.toString() !== req.user.id
        );

        await post.save();
        req.flash(
            'success_msg',
            ' تمت الازالة بنجاح');
        res.redirect(`/prodects/${req.params.id}`);

        // return res.json(post.Favorite);
    } catch (err) {
        console.error(err);
        res.render('error/500')
    }
}


// post
// addreport

exports.addreport = async (req, res) => {
    try {

        const post = await prodects.findById(req.params.id)
        const rep = await report.find()

        if (rep.some((Rep) => Rep.user.toString() === req.user.id)) {
            req.flash(
                'success_msg',
                ' لقد ابلغت ضد هذا مسبقا');
            res.redirect(`/prodects/${req.params.id}`);

        }


        const newReport = {
            cos: req.body.cos,
            Report: req.params.id,
            user: req.user.id

        };

        const r = await new report(newReport)
        console.log(r);
        await r.save();

        req.flash(
            'success_msg',
            'نشكرك ... سيتم النظر للامر في اقرب وقت ممكن');
        res.redirect(`/prodects/${req.params.id}`);
    } catch (err) {
        console.log(err);
        res.render('error/500')
    }
}


exports.addfavorite = async (req, res) => {
    try {

        // const post = await prodects.findById(req.params.id)
        const rep = await Favorite.find({ Fav: req.params.id })


        if (rep.some((Rep) => Rep.Fav.toString() === req.params.id)) {
            req.flash(
                'success_msg',
                '  تمت الاضافه مسبقا')
            res.redirect(`/prodects/${req.params.id}`)
        }

        const r = new Favorite({
            Fav: req.params.id,
            user: req.user.id
        })

        await r.save();
        console.log(r);
        req.flash(
            'success_msg',
            ' تمت الاضافه بنجاح');
        res.redirect(`/prodects/${req.params.id}`);




    } catch (err) {
        console.log(err);
        res.render('error/500')
    }
}


exports.showMyFav = async (req, res) => {
    try {

        const favorites = await prodects.find({ Favorite: req.user.id }).sort({ _id: -1 });

        res.render('pages/myfav', { favorites })

    } catch (err) {
        console.log(err)
        res.render('error/500')
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


