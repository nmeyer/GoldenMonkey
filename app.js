(function() {
  var app, express, game, http, io, pages, _;
  http = require('http');
  _ = require('underscore');
  io = require("socket.io");
  game = require("./game");
  express = require('express');
  pages = require('./pages');
  app = express.createServer();
  io.listen(app);
  app.set('view options', {
    layout: false
  });
  app.configure(function() {
    app.use(express.logger());
    return app.use("/static/", express.static(__dirname + '/static'));
  });
  app.all('/', pages.home);
  game.init();
  io.sockets.on("connection", function(socket) {
    var pid;
    pid = game.create_player();
    game.add_player(pid);
    socket.emit("gamestate", game.get_state());
    socket.on("disconnect", function() {
      game.rem_player(pid);
      return "";
    });
    return socket.on("foo", function() {
      return "";
    });
  });
  app.listen(8000);
}).call(this);
