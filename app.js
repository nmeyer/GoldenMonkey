(function() {
  var app, express, http, pages, _;
  http = require('http');
  _ = require('underscore');
  express = require('express');
  pages = require('./pages');
  app = express.createServer();
  app.set('view options', {
    layout: false
  });
  app.configure(function() {
    app.use(express.logger());
    return app.use("/static/", express.static(__dirname + '/static'));
  });
  app.all('/', pages.home);
  app.listen(8000);
}).call(this);
