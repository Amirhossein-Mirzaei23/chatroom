const userName = prompt('enter your name')

const socket =  new WebSocket(`ws:localhost:5500/${userName}`)

const input= document.querySelector('input')
const chat= document.querySelector('ul')




console.log('dat',socket);

socket.addEventListener('open',()=>{
  
    input.addEventListener('keydown',(event)=>{
        if (event.keyCode == 13) {
            if (event.target.value.trim()) {
                socket.send(event.target.value)
                input.value =""
            }
        }
    })

socket.addEventListener('message' , (event)=>{
    const data = JSON.parse(event.data)
    if (data.message) {
        console.log(`server data => ${event.data}`);
        chat.insertAdjacentHTML('beforeend',`<li>
            <span>${data.userId}</span> :
            <span>${data.message}<span></li>`)
    }

})

})

