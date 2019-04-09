const passport = require('passport');
//const localStrategy = require('./strategies/local.strategy');

module.exports = function passportConfig(app){
    app.use(passport.initialize());
    app.use(passport.session());

    //To write user data to session
    passport.serializeUser((user, done) => {
        done(null, user);
    });

    //To read user data from session
    passport.deserializeUser((user, done) => {
        done(null, user);
    });
    require('./strategies/local.strategy')();
}