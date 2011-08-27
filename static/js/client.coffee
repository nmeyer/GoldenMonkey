$ ->
    width = 20
    height = 10

    for x in [1..height]
        row = $("#row-template").clone()
        for y in [1..width]
            box = $("#snake-box-template").clone()
            box.removeAttr('id')
            box.show()
            box.appendTo(row)

        row.removeAttr('id')
        row.show()
        $(".game-board").append(row)


    # Start socket.io
    socket = io.connect()

    socket.on "gamestate", (data) ->
        console.log data
 