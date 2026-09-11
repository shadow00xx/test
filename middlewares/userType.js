module.exports = {
    admin: function (req, res, next) {
        if (req.isAuthenticated() && req.user && req.user.isAdmin === true) {
            return next();
        }
        return res.status(403).redirect('/');
    },
    store: function (req, res, next) {
        if (req.isAuthenticated() && req.user && req.user.isStore === true) {
            return next();
        }
        return res.status(403).redirect('/');
    },
    Verified: function (req, res, next) {
        if (req.isAuthenticated() && req.user && req.user.isVerified === true) {
            return next();
        }
        return res.status(403).redirect('/');
    },
    owner: function (req, res, next) {
        if (req.isAuthenticated() && req.user && req.user.isowner === true) {
            return next();
        }
        return res.status(403).redirect('/');
    },
};
