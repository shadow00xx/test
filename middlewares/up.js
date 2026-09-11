const multer = require('multer');
const path = require('path');

const allowedMimeTypes = new Set(['image/jpeg', 'image/png', 'image/webp']);
const allowedExtensions = new Set(['.jpg', '.jpeg', '.png', '.webp']);

module.exports = multer({
    storage: multer.diskStorage({}),
    limits: {
        fileSize: 5 * 1024 * 1024,
        files: 3,
    },
    fileFilter: (req, file, cb) => {
        const extension = path.extname(file.originalname).toLowerCase();
        if (!allowedMimeTypes.has(file.mimetype) || !allowedExtensions.has(extension)) {
            return cb(new Error('Only JPG, PNG, and WEBP images are supported'));
        }
        return cb(null, true);
    },
});
