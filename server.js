const express = require('express')
const app = express()
var http = require('http').Server(app)
const io = require('socket.io')(http)
const socketioJwt = require('socketio-jwt')
const PORT = process.env.PORT || 3000

var root = __dirname + '/app'
app.use('/', express.static(root))

io.set('origins', '*domain.com*:*')
io.use(socketioJwt.authorize({
  secret: Buffer(process.env.SOCKET_SECRET, 'base64'),
  handshake: true
}))

http.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})
