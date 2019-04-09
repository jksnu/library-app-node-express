
const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const bodyParser = require('body-parser');                                                                                                  
const passport = require('passport');
const cookieParser = require('cookie-parser');
const session = require('express-session');

const port = process.env.PORT || 3000;
const app = express();

const nav = [
    {"link": "/books", "title":"Books"}, 
    {"link": "/author", "title":"Authors"}
];

app.use(bodyParser.urlencoded({extended: false}));  
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'library', saveUninitialized: true, resave: true}));
require('./src/config/passport.js')(app);
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist")));

app.use((req, res, next) => {
    if(res.body === undefined || res.body === null){
        res.body = {};
    }
    res.locals.nav = nav;
    next();
});

const bookRouter = require('./src/router/bookRouter')(nav);
const adminRouter = require('./src/router/adminRouter')(nav);
const authRouter = require('./src/router/authRouter')(nav);

app.use("/books", bookRouter);
app.use("/admin", adminRouter);
app.use("/auth", authRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    let userName;
    if(req.user && req.user.name){
        userName = req.user.name;
    }
    res.render(
        'index',
        {
            nav,
            "title": "Library",
            "userName": userName
        }
    );
});

app.get('/home', (req, res) => {
    res.redirect('/');
});

const server = app.listen(port, "localhost", ()=>{
    debug("listening at port "+port);
});
