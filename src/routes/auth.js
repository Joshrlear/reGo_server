const router = require('express').Router()
const passport = require('passport')

// login with Linkedin
router.get('/linkedin', passport.authenticate('linkedin', {
    scope: ['r_liteprofile', 'r_emailaddress']
}))

// linkedin redirect after login w/linkedin
router.get('/linkedin/redirect', passport.authenticate('linkedin'), (req, res) => {
    res.send("you've reached the Linkedin redirect page!")
})

// logout
router.get('/logout', (req, res) => {
    // need passport
    res.send('logging out')
})

module.exports = router