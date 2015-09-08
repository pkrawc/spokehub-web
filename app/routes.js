var express = require('express');
var path = require('path');
var User = require('./models/user');


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

  // frontend routes ===========
  app.get('*', function(req, res) {
    // wildcard to send everything to Angular
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
}
