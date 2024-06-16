// fileName : server.js 
// Example using the http module
const { Socket } = require('dgram');
const http = require('http');
const webSocket = require('ws')


// Create an HTTP server
const server = http.createServer();

const ws = new webSocket.Server({server})


ws.on('headers',(headers)=>{
    
})

ws.on('connection',(socket,req)=>{
   const user_id = req.url.slice(1)
   socket.id = user_id

   socket.send(JSON.stringify({
    userId:user_id
   }))

    socket.on('message',(data)=>{
       // socket.send(`${data}`)
       ws.clients.forEach(client=>{
        client.send(JSON.stringify(
            {
            userId:socket.id,
            message:data.toString()
            }
    ))
       })
    })
   

})
// Specify the port to listen on

const port = 8000;

// Start the server
server.listen(port, () => {
    console.log(`Node.js HTTP server is running on port ${port}`);
});