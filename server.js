const express = require('express')
const app = express()
var http = require('http').Server(app)
// var io = require('socket.io')(http);
const PORT = process.env.PORT || 3000

// app.get('/', function(req, res){
//   res.sendFile(__dirname + '/index.html');
// });
var root = __dirname + '/app'
// app.use(express.static(root))
app.use('/', express.static(root))

// io.on('connection', function(socket){
//   socket.on('chat message', function(msg){
//     console.log('index => ', msg);
//     io.emit('chat message', msg);
//   });
// });

http.listen(PORT, () => {
  console.log(`Listening to http://localhost:${PORT}`)
})
