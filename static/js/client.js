(function() {
  $(function() {
    var box, height, row, width, x, y, _results;
    width = 20;
    height = 10;
    _results = [];
    for (x = 1; 1 <= height ? x <= height : x >= height; 1 <= height ? x++ : x--) {
      row = $("#row-template").clone();
      for (y = 1; 1 <= width ? y <= width : y >= width; 1 <= width ? y++ : y--) {
        box = $("#snake-box-template").clone();
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
}).call(this);
