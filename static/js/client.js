(function() {
  var boxAt, onGameState;
  $(function() {
    var box, height, row, sampleCoords, sampleCoords2, socket, width, x, y;
    width = 20;
    height = 10;
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
    sampleCoords = [[3, 3], [4, 3], [5, 3]];
    sampleCoords2 = [[3, 2], [3, 3], [4, 3]];
    onGameState(sampleCoords);
    setTimeout((function() {
      return onGameState(sampleCoords2);
    }), 1000);
    socket = io.connect();
    return socket.on("gamestate", function(data) {
      return console.log(data);
    });
  });
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
