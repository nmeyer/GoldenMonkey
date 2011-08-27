
_ = require("underscore")

created_players = {}
active_players = {}

SPEED = 200

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
    active_players[player.id] = player
    
rem_player = (pid) ->
    delete active_players[pid]

get_state = () ->
    underscore.values activeplayers

gameloop = () ->
    tick = () ->
        
        ""
    setInterval tick, SPEED
    ""

collisions = () ->
    ""

init = () ->
    ""
