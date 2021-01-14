const passport = require('passport');
const SamlStrategy = require('passport-saml').Strategy;
const express = require('express')
const app = express()



passport.use(new SamlStrategy(
  {
    callbackUrl: 'http://localhost:3000/admin',
    entryPoint: 'http://localhost:8080/auth/realms/myrealm/protocol/saml/clients/bertschi',
    issuer: 'passport-saml'
  },
  function(profile, done) {
      console.log(profile)
    }
  )
);

app.get('/login', passport.authenticate('saml',{ 'successRedirect': '/', 'failureRedirect': '/login11' },function(req, res) {
    console.log(req.user, 'user')
}))

app.post(
  '/admin',
  function(req, res,next) {
    console.log(req, 'callback')
    next()
  }
);



module.exports = app
