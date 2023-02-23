const path = require('path');
const User = require('../models/User')
const passport = require('passport');
const bcrypt = require('bcryptjs');




let errors = []

// get
// login
exports.login = (req, res) => {
    res.render('pages/login', { title: ' تسجيل الدخول',layout:"layouts/register" })
}

// get
// signup
exports.signup = (req, res) => {
    res.render('pages/signup', { title: ' التسجيل' })
}

// post 
// signup
exports.signupPost = async (req, res) => {


    try {
        const { displayName, username, password } = req.body

        const user = await User.findOne({ username: username })
        if (user) {
            errors.push({ msg: 'المستخدم موجود بالفعل' })

            res.render('pages/signup', {
                errors
            })
        } else {
            const newUser = await new User({ displayName, username, password, })
            bcrypt.genSalt(10, (err, salt) => {
                bcrypt.hash(newUser.password, salt, async (err, hash) => {
                    if (err) throw err;
                    newUser.password = hash
                    console.log(newUser)
                    await newUser.save()
                })
            })
            req.flash(
                'success_msg',
                'تم التسجيل بنجاح'
            );
            res.redirect('/user/login')
        }
    } catch (err) {
        console.log(err)
    }
}

// post
// login
exports.loginPost = (req, res, next) => {
    passport.authenticate('local', {
        successRedirect: '/',
        failureRedirect: '/user/login',
        failureFlash: true
    })(req, res, next);
}

// get
// profile
exports.profile = async (req, res) => {
    try {

        const user = await User.find({ _id: req.user.id }).lean()

        res.render('profile', { user, title: 'الملف الشخصي' })

    } catch (err) {
        console.log(err);
    }

}



// @desc    Show edit page
// @route   GET /profile/edit/:id
exports.editProfile = async (req, res) => {
    try {

        let user = await User.find({ _id: req.user.id }).lean()

        user = await User.findOneAndUpdate({ _id: req.user.id }, req.body, {
            new: true,
            runValidators: true,
        })

        res.redirect('/dashboard')
    }
    catch (err) {
        console.error(err)
        return res.render('error/500')
    }
}

//   get
// logout
exports.logout = (req, res) => {
    req.logout(req.user, err => {
        if (err) return next(err);
        res.redirect("/user/login");
    });
}