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
    
    pid = game.create_player()
    game.add_player pid
    socket.emit "gamestate", game.get_state()
    
    socket.on "disconnect", () ->
        game.rem_player pid
        ""

loopt = () ->
    console.log 'loopt'
    io.sockets.emit "gamestate", game.tick()
    ""
setInterval loopt, game.SPEED

# Kick it off
app.listen 8000
