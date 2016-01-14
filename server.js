const express = require('express')
const app = express()
var http = require('http').Server(app)
// const io = require('socket.io')(https)
// const socketioJwt = require('socketio-jwt')
const PORT = process.env.PORT || 3000

var root = __dirname + '/app'
app.use('/', express.static(root))

// enable auth0 log in from anywhere
// io.set('origins', '*domain.com*:*')
//
// io.use(socketioJwt.authorize({
//   secret: Buffer(process.env.SOCKET_SECRET, 'base64'),
//   handshake: true
// })
// )

http.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})

// const app = require('./index')
// const http = require('http').createServer(app)
// const PORT = process.env.PORT || 3000
//
// http.listen(PORT, () => {
//   console.log(`Listening to http://localhost:${PORT}`)
// })
