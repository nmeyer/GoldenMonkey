http = require('http')
_ = require('underscore')
io = require "socket.io"
game = require "./game"

# Server
express = require('express')

# Request Handlers
pages = require('./pages')

# Start the express server
app = express.createServer()
io = io.listen app

app.set 'view options',
    layout: false

app.configure ->
    app.use express.logger()
    app.use "/static/", express.static(__dirname + '/static')

app.all '/', pages.home

game.init()

io.sockets.on "connection", (socket) ->

    console.log "connected"
    
    player = game.create_player()
    console.log 'created', player.id
    game.add_player player
    socket.emit "gamestate", game.get_state()

    socket.on "update", (data) ->
        console.log data
        game.set_direction(player, data)

    socket.on "disconnect", () ->
        game.rem_player player

loopt = () ->
    state = game.tick()
    console.log "loopt", state
    io.sockets.emit "gamestate", state

setInterval loopt, game.SPEED

# Kick it off
app.listen 8000
