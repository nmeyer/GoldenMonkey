
assert = require("assert").ok

vectors =
    up: [0, -1],
    down: [0, 1]
    left: [-1, 0]
    right: [1, 0]

directions = 
    up: 1
    down: 2
    left: 3
    right: 4


# 
# player: 
#  has members: 
#    coords: a list of pairs: [[x1, y1], [x2, y2], ...]
#    location: [x1, y1]
#    id: some number
#

@kill = kill = (player) ->
    player.alive = false
    player.coords = []

@move = move = (player, direction) ->
    # update the player's coords in place, moving it 1 unit in direction
    v = vectors[direction]
    assert v, "no valid direction vector"
    c = player.coords[0]
    assert c, "no valid coords"
    
    head = [v[0] + c[0], v[1] + c[1]]
    player.coords.unshift(head)
    player.coords.pop()
    
    # check new head against all other @coords
    for coord in player.coords[1..player.coords.length]
        if head[0] == coord[0] and head[1] == coord[1]
            console.log "killed!"
            kill(player)
    
    # check head against all other players coords for collision
    # head = p.coords[0]
    # for coord in (p2.coords for p2 in _.values(players) when p2 != p)
    #     for coord in coords
    #         if head == coord

