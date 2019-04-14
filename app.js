const express = require('express');
const path = require('path');
const debug = require('debug')('app');
const bodyParser = require('body-parser');  
const cookieParser = require('cookie-parser');
const session = require('express-session');

const port = process.env.PORT || 3000;
const app = express();

app.use(bodyParser.urlencoded({extended: false}));  
app.use(bodyParser.json());
app.use(cookieParser());
app.use(session({secret: 'library', saveUninitialized: true, resave: true}));
require('./src/config/passport.js')(app);
app.use(express.static(path.join(__dirname, "public")));
app.use("/css", express.static(path.join(__dirname, "/node_modules/bootstrap/dist/css")));
app.use("/js", express.static(path.join(__dirname, "node_modules/bootstrap/dist/js")));
app.use("/js", express.static(path.join(__dirname, "/node_modules/jquery/dist")));

const libraryUtil = require('./src/utils/libraryUtil');
app.use(libraryUtil.addResponseBody);
const appRouter = require('./src/router/appRouter')(app);
app.use("/",appRouter);

app.set('views', './src/views');
app.set('view engine', 'ejs');

const server = app.listen(port, "localhost", ()=>{
    debug("listening at port "+port);
});
