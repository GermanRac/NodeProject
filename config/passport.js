const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;
// const LocalStrategy = require('passport-local'.Strategy)
const User = require('../models/user')
const Keys = require('./keys')

const opts = {
    jwtFromRequest :ExtractJwt.fromAuthHeaderWithScheme('jwt'),
    secretOrKey: Keys.secretOrKey

}; 

module.exports = (passport)=>{
    
    passport.use(new JwtStrategy(opts, (jwt_payload,done) => {
        User.findById(jwt_payload.id,(err, user) => {
            if (err){
                return done(err, false); 
            }
            if (user){
                return done(null, user);
            }
            else{
                return done(null, false); 
            }
        });
    } ));  

};