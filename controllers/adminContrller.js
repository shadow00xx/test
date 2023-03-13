const User = require('../models/User')
const prodects = require('../models/Prodects')

const contacts = require('../models/Contact')





exports.showreport = async (req, res) => {
    try {

        const pro = await prodects.find({report:444}).sort({ _id: -1 });

        res.render('pages/showreport', { pro })

    } catch (err) {
        console.log(err)
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