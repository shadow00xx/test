const FacebookStrategy = require('passport-facebook').Strategy
const mongoose = require('mongoose')
const User = require('../models/User')

module.exports = function (passport) {
// passport.use(
//     new FacebookStrategy(
//       {
//         clientID: process.env.FACEBOOK_CLIENT_ID,
//         clientSecret: process.env.FACEBOOK_SECRET_KEY,
//         callbackURL: process.env.FACEBOOK_CALLBACK_URL,
//       },
//       async function (accessToken, refreshToken, profile, cb) {
//         const user = await User.findOne({
//           facebookId: profile.id
         
//         });
//         if (!user) {
//           console.log('Adding new facebook user to DB..');
//           const user = new User({
//             facebookId: profile.id,
//             displayName: profile.displayName,
            
//           });
//           await user.save();
//           // console.log(user);
//           return cb(null, profile);
//         } else {
//           console.log('Facebook User already exist in DB..');
//           // console.log(profile);
//           return cb(null, profile);
//         }
//       }
//     )
//   )


passport.use(new FacebookStrategy({ //This is class constructor argument telling Passport to create a new Facebook Auth Strategy
  clientID: process.env.FACEBOOK_CLIENT_ID,
       clientSecret: process.env.FACEBOOK_SECRET_KEY,
            callbackURL: process.env.FACEBOOK_CALLBACK_URL,
  profile: ['id', 'displayName'] // You have the option to specify the profile objects you want returned
},
function(accessToken, refreshToken, profile, done) {
  //Check the DB to find a User with the profile.id
  User.findOne({ facebookId: profile.id }, function(err, user) {//See if a User already exists with the Facebook ID
    if(err) {
      console.log(err);  // handle errors!
    }
    
    if (user) {
      done(null, user); //If User already exists login as stated on line 10 return User
    } else { //else create a new User
      user = new User({
        facebookId: profile.id, //pass in the id and displayName params from Facebook
        displayName: profile.displayName,
        image: profile.photos[0].value,
        
      });
      user.save(function(err) { //Save User if there are no errors else redirect to login route
        if(err) {
          console.log(err);  // handle errors!
        } else {
          console.log("saving user ...");
          done(null, user);
        }
      });
    }
  });
}
));
  
  passport.serializeUser((user, done) => {
    done(null, user.id)
})

passport.deserializeUser((id, done) => {
    User.findById(id, (err, user) => done(err, user))
})
}
