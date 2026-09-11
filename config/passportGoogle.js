const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../models/User');

module.exports = function (passport) {
    passport.use(
        new GoogleStrategy(
            {
                clientID: process.env.GOOGLE_CLIENT_ID,
                clientSecret: process.env.GOOGLE_CLIENT_SECRET,
                callbackURL: '/auth/google/callback',
            },
            async (accessToken, refreshToken, profile, done) => {
                try {
                    const image = profile.photos?.[0]?.value;
                    const newUser = {
                        googleId: profile.id,
                        displayName: profile.displayName || 'Google User',
                        firstName: profile.name?.givenName,
                        lastName: profile.name?.familyName,
                        image,
                        provider: 'google',
                    };

                    let user = await User.findOne({ googleId: profile.id });
                    if (!user) {
                        user = await User.create(newUser);
                    }

                    return done(null, user);
                } catch (err) {
                    return done(err);
                }
            }
        )
    );
};
