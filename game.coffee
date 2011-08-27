
_ = require("underscore")

players = {}

FPS = 1
SPEED = 1000 / FPS

defaults = 
    snakes:
        len: 8
    board:
        size: 100

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
    _.values players

tick = () ->
    for pid, player in players
        player.tick()
    get_state()
    
collisions = () ->
    ""

init = () ->
    ""

exports.init = init
exports.SPEED = SPEED
exports.tick = tick
    