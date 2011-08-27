var assert = require('assert'),
    io = require('socket.io').listen(3000);



// add player
// 

var createdplayers = {};
var activeplayers = {};
var BOARD_WIDTH = 100;
var LEN = 8;
var underscore = require('./underscore');
var boards = {};

var id = 0;
function nextId() {
    return id++;
}

function createPlayer() {
    var x = Math.floor(Math.random() * (BOARD_WIDTH - LEN));
    var y = Math.floor(Math.random() * (BOARD_WIDTH - LEN));
    var h = (0.5 > Math.random());
    var coords = [[x, y]]
    var lx = x, ly = y;
    for (var i = 0; i < LEN; i++) {
        if (h) {
            lx++
        } else {
            ly++
        }
        coords.push([lx, ly])
    }
    var p = {
        id: nextId(),
        location: [x, y],
        coords: coords
    };
    createdplayers[p.id] = p;
    return p.id;
}

//
function addPlayer(pid) {
    assert(createdplayers[pid]);
    activeplayers[pid] = createdplayers[pid];
}

// 
function removePlayer(pid) {
    delete activeplayers[pid];
}

function getState() {
    var summary = [];
    return underscore.values(activeplayers);
}

function handleInputs() {
    
}

function updatePlayers() {
    
}

function updateGame() {
    
}

function displayGame() {
    
}

var running = true;
function loop() {
    while (running) {
        updateGame();
        displayGame();
    }
    // process inputs
    // handle collisions
    // update players
}

function setup() {
    io.sockets.on('connection', function(socket) {
        
    });
}
