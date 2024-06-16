// fileName : server.js 
// Example using the http module
const { Socket } = require('dgram');
const http = require('http');
const webSocket = require('ws')


// Create an HTTP server
const server = http.createServer();

const ws = new webSocket.Server({server})


ws.on('headers',(headers)=>{
    console.log('header-',headers);
})

ws.on('connection',(socket)=>{
    socket.on('message',(data)=>{
        console.log(`client message ${data}`);
    })
    console.log('new user');

    socket.send('hi I`m get your msg ,backyard')

})
// Specify the port to listen on

const port = 5500;

// Start the server
server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});