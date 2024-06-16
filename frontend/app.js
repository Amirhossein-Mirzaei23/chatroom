const socket =  new WebSocket('ws:localhost:5500')

console.log('dat',socket);

socket.addEventListener('open',()=>{
    socket.send('hi i`m your clinet')


socket.addEventListener('message' , (data)=>{
    console.log(`server data => ${data.data}`);
})

})

