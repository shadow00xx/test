const chatForm = document.getElementById('chat-form');
const chatMessages = document.querySelector('.chat-messages');



const socket = io();


socket.on('message', message =>{
    console.log(message);
    outputMessage(message)
})

// msg summet

chatForm.addEventListener('submit', (e)=>{
    e.preventDefault()
const msg = e.target.elements.msg.value

  // Emit message to server
  socket.emit('chatMessage', msg);

})



// Output message to DOM
function outputMessage(message) {
  const div = document.createElement('div');
  div.classList.add('message')
div.innerHTML = `
<p class='meta'> user <span>10:55pm</span></p>
<p class='text'>
${message}
</p>
`
chatMessages.appendChild(div)
}