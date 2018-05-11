const app = require('express')();
const server = require('http').createServer(app);
const io = require('socket.io')(server);

io.on('connection', function(socket){
    socket.on('message', function(msg){
        socket.broadcast.emit('message', msg);
    });
});

server.listen(4050);

