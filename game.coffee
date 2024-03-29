_ = require("underscore")
player = require('./player')
defaults = require('./config')

players = {}
directions = {}

pid = 0
next_id = () ->
    return pid++

create_player = () ->
    x = Math.floor (Math.random() * defaults.board.size)
    y = Math.floor (Math.random() * defaults.board.size)
    p = 
        alive: true
        coords: ([x, ny] for ny in [0..defaults.snakes.len])
        loc: [x, y]
        id: next_id()

add_player = (player) ->
    players[player.id] = player

rem_player = (pid) ->
    delete players[player.id]

get_state = () ->
    (x.coords for x in _.values players)

tick = () ->
    move_snakes()
    check_collisions
    get_state()

move_snakes = () ->
    for p in _.values(players) when p.alive
        if directions[p.id]
            isDead = player.move(p, directions[p.id])

check_collisions = () ->
    ""
            
md = (c1, c2) ->
    return Math.abs(c1[0], c2[0]) + Math.abs(c1[1], c2[1])

check_self_collisions = () ->
    #
    

init = () ->
    ""

@set_direction = set_direction = (player, direction) ->
    directions[player.id] = direction

exports.create_player = create_player
exports.add_player = add_player
exports.rem_player = rem_player
exports.get_state = get_state
exports.SPEED = defaults.SPEED
exports.init = init
exports.tick = tick
