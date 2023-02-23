
const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy
const bcrypt = require('bcryptjs');



module.exports = function (passport) {
    passport.use(
        new LocalStrategy(async (username, password, done) => {
            try {
                const user = await User.findOne({ username: username })
                if (!user) {
                    return done(null, false, { message: 'المستخدم غير موجود' })

                }
                if (user) {
                    bcrypt.compare(password, user.password, (err, isMatch) => {
                        if (err) {
                            console.log(err);
                        }
                        if (isMatch) {
                            return done(null, user)
                        } else {
                            return done(null, false, { message: 'كلمة السر خطأ' })
                        }
                    })
                }
            } catch (err) {
                console.log(err)
            }

        })
    )

    passport.serializeUser(function (user, done) {
        done(null, user.id);
    });

    passport.deserializeUser(function (id, done) {
        User.findById(id, function (err, user) {
            done(err, user);
        });
    });
}