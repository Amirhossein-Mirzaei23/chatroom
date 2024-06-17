<template>
    <div class=" flex gap-5 flex-col-reverse h-screen mx-auto bg-slate-300 w-full lg:w-10/12 md:mb-5" >
        <div class="w-full flex flex-row-reverse" >
            <input class="w-full overflow-scroll h-8" placeholder="start chat ..." type="text">
            <button id="add" class="absolute h-8 rounded-full bg-teal-600   md:hover:scale-125 md:duration-500" >
                <img class="h-8" src="https://visualpharm.com/assets/163/Send%20Message-595b40b85ba036ed117daa36.svg" alt="send"></button>
        </div>
       
        <ul id="chatBox " class="chat w-full  [&>li]:flex  [&>li]:h-auto  [&>li]:w-9/12 [&>li]:rounded-tr-xl   [&>li]:rounded-bl-xl  [&>li]:rounded-br-sm  [&>li]:rounded-tl-sm  [&>li]:p-1"   >
            <li class="float-right bg-slate-200" >start</li>
            <li class="float-left bg-slate-500" >end</li>
        </ul>
     
    </div>
</template>

<script setup>
import { onMounted } from 'vue'


let userName = prompt("enter u name")


onMounted(()=>{
    let createMessageBtn = document.getElementById('add')
    let chatBox2 = document.querySelector('ul')
    createMessageBtn.addEventListener('click',()=>{
        console.log(chatBox2);
        chatBox2.insertAdjacentHTML('beforeend','<div>amir</div>')
    })
    
const socket =  new WebSocket(`ws:localhost:8000/${userName}`)

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
        chat.insertAdjacentHTML('beforeend',data.userId === userName ? 
        ` 
        <div class="messages-chat" >
        <div class="message" >
        <div  class="response" >
            <p class="text" >${data.message}</p>
        </div>
      </div>
       </div>` :
        ` 
         <div class="messages-chat" >
        <div class="message" >
       
            <p class="text" >${data.message}</p>
       
      </div>
       </div>
      `)
    }

})

})
})


</script>

<style scoped>
.own-message{
    background-color: cadetblue;
    width: 60%;
    height: auto;
   
    padding: 1px 2px;
    white-space:normal;
    float: right;
}

</style>