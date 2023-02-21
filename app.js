const path = require('path');
const express = require('express');
const dotenv = require('dotenv');
const layouts = require('express-ejs-layouts');
const morgan = require('morgan');
const methodOverride = require('method-override')
const session = require('express-session');
const MongoStore = require('connect-mongo');
const passport = require('passport');
const connectDB = require('./config/db')
const flash = require('connect-flash');

// require('./config/database')

// load config 
dotenv.config({ path: './config/config.env' })

// init app
const app = express()

// morgan for login
if (process.env.NODE_ENV === 'develpmont') {
    app.use(morgan('dev'))
}

connectDB()

// Body parser
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Method override
app.use(
    methodOverride(function (req, res) {
        if (req.body && typeof req.body === 'object' && '_method' in req.body) {
            // look in urlencoded POST bodies and delete it
            let method = req.body._method
            delete req.body._method
            return method
        }
    }))

// session
app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    store: MongoStore.create({ mongoUrl: process.env.MANGO_URI }),
}))


// passport
require('./config/passport')(passport)
require('./config/passportGoogle')(passport)


// Passport middleware
app.use(passport.initialize());
app.use(passport.session());

// flash
app.use(flash())
app.use((req, res, next) => {
    res.locals.error = req.flash('error')
    res.locals.success_msg = req.flash('success_msg')
    next()
})

// Set global var user
app.use(function (req, res, next) {
    res.locals.user = req.user || null
    next()
})

// require('./middlewares/img')

// static folders
app.use(express.static(path.join(__dirname, 'public')))

// view engine and layouts
app.use(layouts)
app.set('layout', './layouts/main')
app.set('view engine', 'ejs')


// routers
app.use('/', require('./routers/index'))
app.use('/user', require('./routers/user'))
app.use('/prodects', require('./routers/prodects'))
app.use('/auth', require('./routers/auth'))


// moment js
app.locals.moment = require('moment');


// port
const port = process.env.port || 3000

// listining on
app.listen(port,
    console.log(`server running on port ${port} in ${process.env.NODE_ENV} mode`))
