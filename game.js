(function() {
  var SPEED, active_players, add_player, collisions, create_player, created_players, defaults, gameloop, get_state, init, next_id, pid, rem_player, _;
  _ = require("underscore");
  created_players = {};
  active_players = {};
  SPEED = 200;
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
    return active_players[player.id] = player;
  };
  rem_player = function(pid) {
    return delete active_players[pid];
  };
  get_state = function() {
    return underscore.values(activeplayers);
  };
  gameloop = function() {
    var tick;
    tick = function() {
      return "";
    };
    setInterval(tick, SPEED);
    return "";
  };
  collisions = function() {
    return "";
  };
  init = function() {
    return "";
  };
}).call(this);
