let express = require('express');
let app = express();
let server = require('http').Server(app);
let io = require('socket.io')(server);
let fs = require("fs");

app.use(express.static("."));

app.get('/', function (req, res) {
    res.redirect('index.html');
});
server.listen(3000, () => {
    console.log('connected');
});

io.sockets.emit('send matrix', matrix)

grassArr = [];
grassEaterArr = [];


rass = require("./grass")
rassEater = require("./grassEater")