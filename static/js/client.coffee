$ ->
    width = 20
    height = 10

    for y in [1..height]
        row = $("#row-template").clone()
        for x in [1..width]
            box = $("#snake-box-template").clone()
            box.attr('x',x)
            box.attr('y',y)
            box.removeAttr('id')
            box.show()
            box.appendTo(row)

        row.removeAttr('id')
        row.show()
        $(".game-board").append(row)

    sampleCoords = [[3,3],[4,3],[5,3]]
    sampleCoords2 = [[3,2],[3,3],[4,3]]
    onGameState(sampleCoords)
    setTimeout (-> onGameState(sampleCoords2)),1000

    # Start socket.io
    socket = io.connect()

    socket.on "gamestate", (data) ->
        console.log data
        [coords] = data
        onGameState(coords)


boxAt = (x,y) ->
    return $("[x=#{x}][y=#{y}]")

onGameState = (coords) ->
    # Clear all boxes
    $(".snake-box").removeClass('enemy').removeClass('you')

    # Use grid coordinates to highlight boxes
    _.each coords, (coord) ->
        [x,y] = coord
        box = boxAt(x,y)
        box.addClass('enemy')


