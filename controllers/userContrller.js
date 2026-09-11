const User = require('../models/User');
const passport = require('passport');
const bcrypt = require('bcryptjs');
const prodects = require('../models/Prodects');

// Login
exports.login = (req, res) => {
    res.render('pages/login', { title: ' تسجيل الدخول', layout: 'layouts/register' });
};

// Signup
exports.signup = (req, res) => {
    res.render('pages/signup', { title: ' التسجيل', layout: 'layouts/register' });
};

exports.signupPost = async (req, res) => {
    try {
        const displayName = String(req.body.displayName || '').trim();
        const username = String(req.body.username || '').trim();
        const password = String(req.body.password || '');

        if (!displayName || !username || password.length < 6) {
            req.flash('error_msg', 'الرجاء إدخال البيانات بشكل صحيح وكلمة مرور لا تقل عن 6 أحرف');
            return res.redirect('/user/signup');
        }

        const existingUser = await User.findOne({ username });
        if (existingUser) {
            req.flash('error_msg', 'المستخدم موجود بالفعل');
            return res.redirect('/user/signup');
        }

        const hashedPassword = await bcrypt.hash(password, 12);
        await User.create({ displayName, username, password: hashedPassword });

        req.flash('success_msg', 'تم التسجيل بنجاح');
        return res.redirect('/user/login');
    } catch (err) {
        console.error(err);
        return res.render('error/500');
    }
};

// Login
exports.loginPost = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/user/login',
        failureFlash: true,
    })(req, res, next);
};

// Current user's profile
exports.profile = (req, res) => {
    return res.render('profile', { user: req.user, title: 'الملف الشخصي' });
};

// Edit only the current user's safe profile fields.
exports.editProfile = async (req, res) => {
    try {
        const allowedFields = ['displayName', 'firstName', 'lastName', 'image'];
        const updates = {};

        for (const field of allowedFields) {
            if (req.body[field] !== undefined) {
                updates[field] = String(req.body[field]).trim();
            }
        }

        // Do not allow profile editing to change identity, password, or privileges.
        delete updates.username;
        delete updates.password;
        delete updates.isAdmin;
        delete updates.isStore;
        delete updates.isVerified;
        delete updates.isowner;
        delete updates.provider;
        delete updates.googleId;
        delete updates.facebookId;

        const updatedUser = await User.findByIdAndUpdate(req.user._id, updates, {
            new: true,
            runValidators: true,
        });

        if (!updatedUser) {
            return res.status(404).render('error/404');
        }

        return res.redirect('/user/profile');
    } catch (err) {
        console.error(err);
        return res.render('error/500');
    }
};

// Logout
exports.logout = (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.session?.destroy(() => res.redirect('/user/login'));
    });
};

// Public profile of another user.
exports.showUsersMyProfile = async (req, res) => {
    try {
        const user = await User.findById(req.params.id).lean();
        if (!user) {
            return res.status(404).render('error/404');
        }

        const userpro = await prodects.find({ user: req.params.id })
            .populate('user')
            .lean();

        return res.render('pages/showUsersMyProfile', {
            user,
            userpro,
            title: 'الملف الشخصي',
        });
    } catch (err) {
        console.error(err);
        return res.render('error/500');
    }
};
