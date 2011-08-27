
_ = require("underscore")
player = require('./player')

players = {}
directions = {}

FPS = .5
SPEED = 1000 / FPS

defaults = 
    snakes:
        len: 8
    board:
        size: 10

pid = 0
next_id = () ->
    return pid++

create_player = () ->
    x = Math.floor Math.random() * defaults.board.size
    y = Math.floor Math.random() * defaults.board.size
    p = 
        coords: ([x, ny] for ny in [0..defaults.snakes.len])
        loc: [x, y]
        id: next_id()

add_player = (player) ->
    players[player.id] = player

rem_player = (pid) ->
    delete players[pid]

get_state = () ->
    (x.coords for x in _.values players)

tick = () ->
    for p in _.values(players)
        # console.log pid, p, directions[pid]
        if directions[p.id]
            player.move(p, directions[p.id])
    get_state()

collisions = () ->
    ""

init = () ->
    ""

@set_direction = set_direction = (player, direction) ->
    directions[player.id] = direction

exports.create_player = create_player
exports.add_player = add_player
exports.rem_player = rem_player
exports.get_state = get_state
exports.SPEED = SPEED
exports.init = init
exports.tick = tick
