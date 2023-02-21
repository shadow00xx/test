const path = require('path');
const multer = require('multer');


var storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'public/uploads')
    },
    filename: (req, file, cb) => {
        const suffix = file.mimetype.split('/');
        cb(null, `${file.fieldname}-${Date.now()}.${suffix[1]}`);
    }
})

var upload = multer({
    storage: storage,
    fileFilter: function (req, file, callback) {
        if (file.mimetype == 'image/jpg' || file.mimetype == 'image/png' || file.mimetype == 'image/jpeg') {
            callback(null, true)
            console.log('img uploaded');
        }
        else {
            console.log('only img alows')
            callback(null, false)
        }
    }, limits: {
        fileSize: 1024 * 1024 * 5
    }
})


module.exports = upload