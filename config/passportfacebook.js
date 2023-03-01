const FacebookStrategy = require('passport-facebook').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function (passport) {
passport.use(
    new FacebookStrategy(
      {
        clientID: process.env.FACEBOOK_CLIENT_ID,
        clientSecret: process.env.FACEBOOK_SECRET_KEY,
        callbackURL: process.env.FACEBOOK_CALLBACK_URL,
      },
      async function (accessToken, refreshToken, profile, cb) {
        const user = await User.findOne({
          accountId: profile.id
         
        });
        if (!user) {
          console.log('Adding new facebook user to DB..');
          const user = new User({
            accountId: profile.id,
            displayName: profile.displayName,
            
          });
          await user.save();
          // console.log(user);
          return cb(null, profile);
        } else {
          console.log('Facebook User already exist in DB..');
          // console.log(profile);
          return cb(null, profile);
        }
      }
    )
  )
  
  passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
})
}
