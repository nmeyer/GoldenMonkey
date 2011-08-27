socket = null

$ ->
    width = 30
    height = 30

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

    # Start socket.io
    socket = io.connect()

    # Init with the size of the board
    socket.on "board", (width, height) ->
        console.log 'board'
        for y in [0..height]
            row = $("#row-template").clone()
            for x in [0..width]
                box = $("#snake-box-template").clone()
                box.attr('x',x)
                box.attr('y',y)
                box.removeAttr('id')
                box.show()
                box.appendTo(row)

            row.removeAttr('id')
            row.show()
            $(".game-board").append(row)

    # Update the entire grid each iteration
    socket.on "gamestate", (snakes) ->
        console.log snakes
        onGameState(snakes)


    # Track key presses for direction changes
    $(document).keydown (event) ->
        if event.which == 38
            tellServerDirection('up')
        else if event.which == 39
            tellServerDirection('right')
        else if event.which == 40
            tellServerDirection('down')
        else if event.which == 37
            tellServerDirection('left')

tellServerDirection = (direction) ->
    socket.emit 'update', direction

boxAt = (x,y) ->
    return $("[x=#{x}][y=#{y}]")

onGameState = (snakes) ->
    # Clear all boxes
    $(".snake-box").removeClass('enemy').removeClass('you')

    # Render all the snakes
    _.each snakes, (snake) ->
        renderSnake(snake)

renderSnake = (coords) ->
    # Use grid coordinates to highlight boxes
    _.each coords, (coord) ->
        [x,y] = coord
        box = boxAt(x,y)
        box.addClass('enemy')
