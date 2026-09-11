const User = require('../models/User');
const LocalStrategy = require('passport-local').Strategy;
const bcrypt = require('bcryptjs');

module.exports = function (passport) {
    passport.use(
        new LocalStrategy(async (username, password, done) => {
            try {
                const user = await User.findOne({ username: username.trim() });
                if (!user || !user.password) {
                    return done(null, false, { message: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
                }

                const isMatch = await bcrypt.compare(password, user.password);
                if (!isMatch) {
                    return done(null, false, { message: 'اسم المستخدم أو كلمة المرور غير صحيحة' });
                }

                return done(null, user);
            } catch (err) {
                return done(err);
            }
        })
    );

    passport.serializeUser((user, done) => done(null, user.id));

    passport.deserializeUser(async (id, done) => {
        try {
            const user = await User.findById(id);
            if (!user) return done(null, false);
            return done(null, user);
        } catch (err) {
            return done(err);
        }
    });
};
