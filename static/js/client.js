(function() {
  var boxAt, onGameState, socket, tellServerDirection;
  socket = null;
  $(function() {
    var box, height, row, width, x, y;
    width = 30;
    height = 30;
    for (y = 1; 1 <= height ? y <= height : y >= height; 1 <= height ? y++ : y--) {
      row = $("#row-template").clone();
      for (x = 1; 1 <= width ? x <= width : x >= width; 1 <= width ? x++ : x--) {
        box = $("#snake-box-template").clone();
        box.attr('x', x);
        box.attr('y', y);
        box.removeAttr('id');
        box.show();
        box.appendTo(row);
      }
      row.removeAttr('id');
      row.show();
      $(".game-board").append(row);
    }
    socket = io.connect();
    socket.on("gamestate", function(data) {
      var coords;
      console.log(data);
      coords = data[0];
      return onGameState(coords);
    });
    return $(document).keydown(function(event) {
      console.log('keypress');
      console.log(event.which);
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
  onGameState = function(coords) {
    $(".snake-box").removeClass('enemy').removeClass('you');
    return _.each(coords, function(coord) {
      var box, x, y;
      x = coord[0], y = coord[1];
      box = boxAt(x, y);
      return box.addClass('enemy');
    });
  };
}).call(this);
