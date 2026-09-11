const FacebookStrategy = require('passport-facebook').Strategy;
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new FacebookStrategy(
            {
                clientID: process.env.FACEBOOK_CLIENT_ID,
                clientSecret: process.env.FACEBOOK_SECRET_KEY,
                callbackURL: process.env.FACEBOOK_CALLBACK_URL,
                profileFields: ['id', 'displayName', 'photos'],
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    let user = await User.findOne({ facebookId: profile.id });

                    if (!user) {
                        user = await User.create({
                            facebookId: profile.id,
                            displayName: profile.displayName || 'Facebook User',
                            image: profile.photos?.[0]?.value,
                            provider: 'facebook',
                        });
                    }

                    return done(null, user);
                } catch (err) {
                    return done(err);
                }
            }
        )
    );
};
