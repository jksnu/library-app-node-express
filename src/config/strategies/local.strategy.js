const passport = require('passport');
const { Strategy } = require('passport-local');

module.exports = function localStrategy(){
    console.log('I am in LocalStrategy')
    passport.use(new Strategy({
        usernameField: 'userName',
        passwordField: 'password'
    }, (username, password, done) => {
        const user = {username, password};
        done(null, user);
    }));
}