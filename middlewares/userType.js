
const mongoose = require('mongoose');
const user = require('../models/User');
module.exports = {
    admin: async (req, res, next)=> {
let ad = await user.findOne({isAdmin:true})
      if (ad) {
        return next()
      } else {
        console.log("you are not admin");
        res.redirect('/')
      }
    },
    store:  async(req, res, next)=> {
        let sto = await user.findOne({isStore:true})
        if (sto) {
          return next()
        } else {
          console.log("you are not store");
          res.redirect('/')
        }
    },   
    Verified:  async(req, res, next) => {
        let val = await user.findOne({isVerified:true})
        if (val) {
          return next()
        } else {
          console.log("you are not Verified");
          res.redirect('/')
        }
  },
  owner:  async(req, res, next) => {
    let val = await user.findOne({isowner:true})
    if (val) {
      return next()
    } else {
      console.log("you are not owner");
      res.redirect('/')
    }
}
}