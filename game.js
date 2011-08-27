(function() {
  var FPS, SPEED, add_player, collisions, create_player, defaults, directions, get_state, init, next_id, pid, players, rem_player, set_direction, tick, _;
  _ = require("underscore");
  players = {};
  directions = {};
  FPS = 1;
  SPEED = 1000 / FPS;
  defaults = {
    snakes: {
      len: 8
    },
    board: {
      size: 100
    }
  };
  pid = 0;
  next_id = function() {
    return pid++;
  };
  create_player = function() {
    var ny, p, x, y;
    x = Math.floor(Math.random() * defaults.board.size);
    y = Math.floor(Math.random() * defaults.board.size);
    return p = {
      coords: (function() {
        var _ref, _results;
        _results = [];
        for (ny = 0, _ref = defaults.snakes.len; 0 <= _ref ? ny <= _ref : ny >= _ref; 0 <= _ref ? ny++ : ny--) {
          _results.push([x, ny]);
        }
        return _results;
      })(),
      loc: [x, y],
      id: next_id()
    };
  };
  add_player = function(player) {
    return players[player.id] = player;
  };
  rem_player = function(pid) {
    return delete players[pid];
  };
  get_state = function() {
    return _.values(players);
  };
  tick = function() {
    var pid, player, _len;
    for (player = 0, _len = players.length; player < _len; player++) {
      pid = players[player];
      player.tick();
    }
    return get_state();
  };
  collisions = function() {
    return "";
  };
  init = function() {
    return "";
  };
  set_direction = function(player) {
    return "";
  };
  exports.init = init;
  exports.SPEED = SPEED;
  exports.tick = tick;
}).call(this);
