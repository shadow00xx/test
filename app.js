const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const layouts = require('express-ejs-layouts');
const morgan = require('morgan');
const methodOverride = require('method-override');
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const connectDB = require('./config/db');
const flash = require('connect-flash');

// Load configuration from the local environment file when present.
dotenv.config({ path: './config/config.env' });

const app = express();

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

connectDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(methodOverride((req) => {
    if (req.body && typeof req.body === 'object' && '_method' in req.body) {
        const method = req.body._method;
        delete req.body._method;
        return method;
    }
}));

app.set('trust proxy', 1);

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
    throw new Error('SESSION_SECRET is required');
}

app.use(session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
        httpOnly: true,
        secure: process.env.NODE_ENV === 'production',
        sameSite: 'lax',
        maxAge: 1000 * 60 * 60 * 24 * 7,
    },
    store: MongoStore.create({
        mongoUrl: process.env.MONGO_URI || process.env.MANGO_URI,
    }),
}));

require('./config/passport')(passport);
require('./config/passportGoogle')(passport);
require('./config/passportfacebook')(passport);

app.use(passport.initialize());
app.use(passport.session());

app.use(flash());
app.use((req, res, next) => {
    res.locals.error = req.flash('error');
    res.locals.success_msg = req.flash('success_msg');
    next();
});

app.use((req, res, next) => {
    res.locals.user = req.user || null;
    next();
});

app.use(express.static(path.join(__dirname, 'public')));

app.use(layouts);
app.set('layout', './layouts/main');
app.set('view engine', 'ejs');

app.use('/', require('./routers/index'));
app.use('/user', require('./routers/user'));
app.use('/prodects', require('./routers/prodects'));
app.use('/auth', require('./routers/auth'));
app.use('/admin', require('./routers/admin'));

app.locals.moment = require('moment');

const port = process.env.PORT || process.env.port || 3000;

app.listen(port, () => {
    console.log(`server running on port ${port} in ${process.env.NODE_ENV || 'development'} mode`);
});
