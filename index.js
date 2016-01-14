// const chalk = require('chalk')
const express = require('express')
const app = express()
const http = require('http').Server(app)
const io = require('socket.io')(http)
const socketioJwt = require('socketio-jwt')

var root = __dirname + '/app'
app.use('/', express.static(root))

// enable auth0 log in from anywhere
io.set('origins', '*domain.com*:*')

io.use(socketioJwt.authorize({
  secret: Buffer(process.env.SOCKET_SECRET, 'base64'),
  handshake: true
})
)
