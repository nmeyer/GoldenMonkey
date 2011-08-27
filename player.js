(function() {
  var directions, move, vectors;
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
  move = function(player, direction) {
    var c, v;
    v = vectors[direction];
    c = player.coords[0];
    player.coords.unshift([v[0] + c[0], v[1] + c[1]]);
    return player.coords.pop();
  };
}).call(this);
