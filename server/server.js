const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('New user connected!');

    socket.emit('newMessage', {
        from: 'Eliza',
        text: 'Hey, I heard that you mother has passed away!',
        createdAt: 327
    });

    socket.on('createMessage', (message) => {
        console.log('Message sent from client side:', message);
    });

    socket.on('disconnect', () => {
        console.log('User is disconnected!');
    });
});

server.listen(3000, () => {
    console.log('Server is up on port 3000!');
});