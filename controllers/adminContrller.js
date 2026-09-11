const prodects = require('../models/Prodects');
const contacts = require('../models/Contact');

exports.showreport = async (req, res) => {
    try {
        const pro = await prodects.find({
            $or: [
                { 'reports.0': { $exists: true } },
                { report: 444 },
            ],
        }).sort({ _id: -1 });

        res.render('pages/showreport', { pro });
    } catch (err) {
        console.error(err);
        res.render('error/500');
    }
};

exports.showcontact = async (req, res) => {
    try {
        const contact = await contacts.find().sort({ createdAt: -1 }).populate('createby');
        res.render('pages/showcontacts', { contact });
    } catch (err) {
        console.error(err);
        res.render('error/500');
    }
};
