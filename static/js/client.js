(function() {
  var boxAt, onGameState, renderSnake, socket, tellServerDirection;
  socket = null;
  $(function() {
    socket = io.connect();
    socket.on("board", function(width, height) {
      var box, row, x, y, _results;
      console.log('board');
      _results = [];
      for (y = 0; 0 <= height ? y <= height : y >= height; 0 <= height ? y++ : y--) {
        row = $("#row-template").clone();
        for (x = 0; 0 <= width ? x <= width : x >= width; 0 <= width ? x++ : x--) {
          box = $("#snake-box-template").clone();
          box.attr('x', x);
          box.attr('y', y);
          box.removeAttr('id');
          box.show();
          box.appendTo(row);
        }
        row.removeAttr('id');
        row.show();
        _results.push($(".game-board").append(row));
      }
      return _results;
    });
    socket.on("gamestate", function(snakes) {
      console.log(snakes);
      return onGameState(snakes);
    });
    return $(document).keydown(function(event) {
      if (event.which === 38) {
        return tellServerDirection('up');
      } else if (event.which === 39) {
        return tellServerDirection('right');
      } else if (event.which === 40) {
        return tellServerDirection('down');
      } else if (event.which === 37) {
        return tellServerDirection('left');
      }
    });
  });
  tellServerDirection = function(direction) {
    return socket.emit('update', direction);
  };
  boxAt = function(x, y) {
    return $("[x=" + x + "][y=" + y + "]");
  };
  onGameState = function(snakes) {
    $(".snake-box").removeClass('enemy').removeClass('you');
    return _.each(snakes, function(snake) {
      return renderSnake(snake);
    });
  };
  renderSnake = function(coords) {
    return _.each(coords, function(coord) {
      var box, x, y;
      x = coord[0], y = coord[1];
      box = boxAt(x, y);
      return box.addClass('enemy');
    });
  };
}).call(this);
