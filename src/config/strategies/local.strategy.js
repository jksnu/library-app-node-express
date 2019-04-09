const passport = require('passport');
const { Strategy } = require('passport-local');
const authDao = require('../../dao/authDao');

module.exports = function localStrategy(){
    console.log('I am in LocalStrategy')
    passport.use(new Strategy({
        usernameField: 'userName',
        passwordField: 'password',
        passReqToCallback: false
    }, (username, password, done) => {
        console.log("Inside local strategy function");
        console.log("username = "+username+" password = "+password);
        const user = {username, password};
        authDao.authenticate(user).then((data) => {
            if(data){
                done(null, data);
            } else {
                done(null, false);
            }
        }, (err) => {
            done(null, false);
        })
        //authDao.authenticate(user);
        //done(null, user);
    }));
}