var express  = require('express');
var passport = require('passport');
var path     = require('path');
var User     = require('./models/user');


module.exports = function(app) {
  // server routes =============
  // sample api call
  app.get('/api/users', function(req, res) {
    User.find(function(err, users) {
      if (err) {
        res.send(err);
      }
      res.json(users);
    });
  });

  app.get('/login', function(req, res) {
    res.render('login', {user: req.user});
  });

  app.post('/login', passport.authenticate('local'), function(req, res) {
    res.redirect('/');
  });

  app.get('/api/ping', function(req, res){
    res.status(200).send("pong!");
  });

  // frontend routes ===========
  app.get('*', function(req, res) {
    // wildcard to send everything to Angular
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}
