var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
   console.log('Disconnected from server'); 
});

socket.on('newMessage', function (message) {
    console.log(`NEW MESSAGE!\nFROM: ${message.from}\n${message.text}\nSENT AT: ${message.createdAt}`);
});



