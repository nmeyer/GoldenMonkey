(function() {
  var app, express, game, http, io, loopt, pages, _;
  http = require('http');
  _ = require('underscore');
  io = require("socket.io");
  game = require("./game");
  express = require('express');
  pages = require('./pages');
  app = express.createServer();
  io = io.listen(app);
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
    var player;
    console.log("connected");
    player = game.create_player();
    console.log('created', player.id);
    game.add_player(player);
    socket.emit("board", 100);
    socket.emit("gamestate", game.get_state());
    socket.on("update", function(data) {
      console.log(data);
      return game.set_direction(player, data);
    });
    return socket.on("disconnect", function() {
      return game.rem_player(player);
    });
  });
  loopt = function() {
    var state;
    state = game.tick();
    console.log("loopt", state);
    return io.sockets.emit("gamestate", state);
  };
  setInterval(loopt, game.SPEED);
  app.listen(8000);
}).call(this);
