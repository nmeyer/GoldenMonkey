http = require('http')
_ = require('underscore')

# Server
express = require('express')

# Request Handlers
pages = require('./pages')

# Start the express server
app = express.createServer()

app.set 'view options',
    layout: false

app.configure ->
    app.use express.logger()
    app.use "/static/", express.static(__dirname + '/static')


app.all '/', pages.home

# Kick it off
app.listen 8000
