
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
@move = move = (player, direction) ->
    # update the player's coords in place, moving it 1 unit in direction
    v = vectors[direction]
    assert v, "no valid direction vector"
    c = player.coords[0]
    assert c, "no valid coords"
    player.coords.unshift([v[0] + c[0], v[1] + c[1]])
    player.coords.pop()

