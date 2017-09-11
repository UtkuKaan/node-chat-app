var socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    socket.emit('createMessage', {
        from: 'Utku',
        text: 'Yes it is true, {insert sad emoji here} :('
    });
});

socket.on('disconnect', function () {
   console.log('Disconnected from server'); 
});

socket.on('newMessage', function (message) {
    console.log(`NEW MESSAGE!\nFROM: ${message.from}\n${message.text}\nSENT AT: ${message.createdAt}`);
});



