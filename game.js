(function() {
  var FPS, SPEED, add_player, check_collisions, check_self_collisions, create_player, defaults, directions, get_state, init, md, move_snakes, next_id, pid, player, players, rem_player, set_direction, tick, _;
  _ = require("underscore");
  player = require('./player');
  players = {};
  directions = {};
  FPS = 20;
  SPEED = 1000 / FPS;
  defaults = {
    snakes: {
      len: 8
    },
    board: {
      size: 10
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
      alive: true,
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
    return delete players[player.id];
  };
  get_state = function() {
    var x, _i, _len, _ref, _results;
    _ref = _.values(players);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      x = _ref[_i];
      _results.push(x.coords);
    }
    return _results;
  };
  tick = function() {
    move_snakes();
    check_collisions;
    return get_state();
  };
  move_snakes = function() {
    var isDead, p, _i, _len, _ref, _results;
    _ref = _.values(players);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      p = _ref[_i];
      if (p.alive) {
        _results.push(directions[p.id] ? isDead = player.move(p, directions[p.id]) : void 0);
      }
    }
    return _results;
  };
  check_collisions = function() {
    return "";
  };
  md = function(c1, c2) {
    return Math.abs(c1[0], c2[0]) + Math.abs(c1[1], c2[1]);
  };
  check_self_collisions = function() {};
  init = function() {
    return "";
  };
  this.set_direction = set_direction = function(player, direction) {
    return directions[player.id] = direction;
  };
  exports.create_player = create_player;
  exports.add_player = add_player;
  exports.rem_player = rem_player;
  exports.get_state = get_state;
  exports.SPEED = SPEED;
  exports.init = init;
  exports.tick = tick;
}).call(this);
