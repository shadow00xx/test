const prodects = require('../models/Prodects');
const cloudinary = require('../utils/cloudinary');
const fs = require('fs');

const removeTempFile = async (file) => {
    if (!file || !file.path) return;
    try {
        await fs.promises.unlink(file.path);
    } catch (err) {
        // The upload can succeed even when the temporary file is already gone.
        if (err.code !== 'ENOENT') console.error(err);
    }
};

const removeCloudinaryImages = async (publicIds = []) => {
    for (const publicId of publicIds) {
        if (!publicId) continue;
        try {
            await cloudinary.uploader.destroy(publicId);
        } catch (err) {
            // Image cleanup must not turn a successful product operation into a failure.
            console.error(`Cloudinary cleanup failed for ${publicId}:`, err.message);
        }
    }
};

exports.addprodect = (req, res) => {
    res.render('add_prodect', { title: 'اضافه سلعه' });
};

exports.addproPost = async (req, res) => {
    const uploadedPublicIds = [];

    try {
        // Never spread req.body into a product document. Only allow fields that
        // belong to a product so users cannot submit protected fields such as
        // Favorite, reports, cloudinary_ids, or arbitrary model properties.
        const allowedFields = [
            'name',
            'phone',
            'address',
            'body',
            'prise',
            'category',
            'modal',
            'gas',
            'conditions',
            'location',
            'num',
            'owners',
            'reson',
        ];

        const productData = { user: req.user._id };
        for (const field of allowedFields) {
            if (req.body[field] !== undefined) {
                productData[field] = req.body[field];
            }
        }

        const files = Array.isArray(req.files) ? req.files : [];
        const imageURIs = [];

        for (const file of files) {
            try {
                const uploaded = await cloudinary.uploader.upload(file.path);
                imageURIs.push(uploaded.secure_url);
                uploadedPublicIds.push(uploaded.public_id);
            } finally {
                await removeTempFile(file);
            }
        }

        if (imageURIs.length > 0) {
            productData.image = imageURIs;
            productData.cloudinary_ids = uploadedPublicIds;
        }

        await prodects.create(productData);
        return res.redirect('/');
    } catch (err) {
        await removeCloudinaryImages(uploadedPublicIds);
        console.error(err);
        return res.render('error/500');
    }
};

exports.showMyPro = async (req, res) => {
    try {
        const march = await prodects.find({ user: req.user._id })
            .sort({ createdAt: 'desc' });
        res.render('myProdects', { march, title: 'منتجاتي ' });
    } catch (err) {
        console.error(err);
        res.render('error/500');
    }
};

exports.showOnePro = async (req, res) => {
    try {
        const e = await prodects.findById(req.params.id).populate('user').lean();

        if (!e) {
            return res.status(404).render('error/404');
        }

        const userId = req.user ? req.user._id.toString() : null;
        const favorites = Array.isArray(e.Favorite) ? e.Favorite : [];
        const x = userId ? favorites.some((like) => like.toString() === userId) : false;

        return res.render('pages/prodect', { e, x, title: e.name });
    } catch (err) {
        console.error(err);
        return res.render('error/500');
    }
};

exports.deletePro = async (req, res) => {
    try {
        const deleted = await prodects.findOneAndDelete({
            _id: req.params.id,
            user: req.user._id,
        });

        if (!deleted) {
            return res.status(403).redirect('/prodects/myProdects');
        }

        await removeCloudinaryImages(deleted.cloudinary_ids);
        return res.redirect('/prodects/myProdects');
    } catch (err) {
        console.error(err);
        return res.render('error/500');
    }
};

exports.Favorite = async (req, res) => {
    try {
        const post = await prodects.findById(req.params.id);
        if (!post) return res.status(404).render('error/404');

        const userId = req.user._id;
        if (!post.Favorite.some((like) => like.toString() === userId.toString())) {
            post.Favorite.push(userId);
            await post.save();
            req.flash('success_msg', 'تمت الاضافة بنجاح');
        } else {
            req.flash('success_msg', 'تمت الاضافة مسبقاً');
        }

        return res.redirect(`/prodects/${req.params.id}`);
    } catch (err) {
        console.error(err);
        return res.render('error/500');
    }
};

exports.unFavorite = async (req, res) => {
    try {
        const post = await prodects.findById(req.params.id);
        if (!post) return res.status(404).render('error/404');

        post.Favorite = post.Favorite.filter(
            (like) => like.toString() !== req.user._id.toString()
        );
        await post.save();

        req.flash('success_msg', 'تمت الازالة بنجاح');
        return res.redirect(`/prodects/${req.params.id}`);
    } catch (err) {
        console.error(err);
        return res.render('error/500');
    }
};

exports.addreport = async (req, res) => {
    try {
        const post = await prodects.findById(req.params.id);
        if (!post) return res.status(404).render('error/404');

        const alreadyReported = post.reports.some(
            (report) => report.user.toString() === req.user._id.toString()
        );

        if (!alreadyReported) {
            post.reports.push({ user: req.user._id });
            await post.save();
            req.flash('success_msg', 'تمت الابلاغ بنجاح سيتم التحقق من المنشور قريباً ... نشكرك');
        } else {
            req.flash('success_msg', 'تم الابلاغ عن هذا المنشور مسبقاً');
        }

        return res.redirect(`/prodects/${req.params.id}`);
    } catch (err) {
        console.error(err);
        return res.render('error/500');
    }
};
