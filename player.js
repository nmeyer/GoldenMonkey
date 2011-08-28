(function() {
  var assert, defaults, directions, kill, move, vectors;
  defaults = require("./config");
  assert = require("assert").ok;
  vectors = {
    up: [0, -1],
    down: [0, 1],
    left: [-1, 0],
    right: [1, 0]
  };
  directions = {
    up: 1,
    down: 2,
    left: 3,
    right: 4
  };
  this.kill = kill = function(player) {
    player.alive = false;
    return player.coords = [];
  };
  this.move = move = function(player, direction) {
    var c, coord, head, v, _i, _len, _ref, _results;
    v = vectors[direction];
    assert(v, "no valid direction vector");
    c = player.coords[0];
    assert(c, "no valid coords");
    head = [v[0] + c[0], v[1] + c[1]];
    player.coords.unshift(head);
    player.coords.pop();
    if (head[0] < 0 || head[0] > (defaults.board.size - 1) || head[1] < 0 || head[1] > (defaults.board.size - 1)) {
      console.log("wall hit!");
      kill(player);
    }
    _ref = player.coords.slice(1, (player.coords.length + 1) || 9e9);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      coord = _ref[_i];
      _results.push(head[0] === coord[0] && head[1] === coord[1] ? (console.log("ran into self!"), kill(player)) : void 0);
    }
    return _results;
  };
}).call(this);
