const passport = require('passport')
const LinkedinStrategy = require('passport-linkedin-oauth2').Strategy
const config = require('./config')

passport.use(
    new LinkedinStrategy({
        // options for strategy
        clientID: config.clientID,
        clientSecret: config.clientSecret,
        callbackURL: '/auth/linkedin/redirect'
    }, (accessToken, refreshToken, profile, done) => {
        // passport cb
        console.log('Passport cb fired!')
        console.log('profile:', profile)
    })
)