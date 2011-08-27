(function() {
  var assert, directions, move, vectors;
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
  this.move = move = function(player, direction) {
    var c, v;
    v = vectors[direction];
    assert(v, "no valid direction vector");
    c = player.coords[0];
    assert(c, "no valid coords");
    player.coords.unshift([v[0] + c[0], v[1] + c[1]]);
    return player.coords.pop();
  };
}).call(this);
