const User = require('../models/User')
const prodects = require('../models/Prodects')
const reports = require('../models/Report')
const contacts = require('../models/Contact')


exports.report = async(req, res) => {
try {
const report = await prodects.find({likes})

    res.render('admin', { title: 'اضافه سلعه' })
} catch (err) {
    console.log(err);
}
}




// get
// show report 
exports.showreportx = async(req, res)=>{
    try {
const report = await reports.find().sort('desc')
     .populate('user')
     .populate('Report')


        res.render('pages/showreport', {report})
    } catch (err) {
        console.log(err);
        res.render('error/500')
    }
}



// get
// show showcontact 
exports.showcontact = async(req, res)=>{
    try {
const contact = await contacts.find().sort('desc')
     .populate('createby')

        res.render('pages/showcontacts', {contact})
    } catch (err) {
        console.log(err);
        res.render('error/500')
    }
}