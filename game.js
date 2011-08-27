(function() {
  var FPS, SPEED, add_player, check_collisions, create_player, defaults, directions, get_state, init, move_snakes, next_id, pid, player, players, rem_player, set_direction, tick, _;
  _ = require("underscore");
  player = require('./player');
  players = {};
  directions = {};
  FPS = .5;
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
    var p, _i, _len, _ref, _results;
    _ref = _.values(players);
    _results = [];
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      p = _ref[_i];
      _results.push(directions[p.id] ? player.move(p, directions[p.id]) : void 0);
    }
    return _results;
  };
  check_collisions = function() {
    var p1, p2, snakes, _i, _len, _results;
    snakes = _.values(players);
    _results = [];
    for (_i = 0, _len = snakes.length; _i < _len; _i++) {
      p1 = snakes[_i];
      _results.push((function() {
        var _j, _len2, _results2;
        _results2 = [];
        for (_j = 0, _len2 = snakes.length; _j < _len2; _j++) {
          p2 = snakes[_j];
          if (p1 === p2) {
            continue;
          }
        }
        return _results2;
      })());
    }
    return _results;
  };
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
