var socket = io();
$(() => {
    $("#send").click(()=>{
      event.preventDefault();
        sendMessage({name: $("#name").val(), message: $("#message").val()});
        $("#messageForm").trigger("reset");
    })
    getMessages()
})
socket.on('message', addMessages)
function addMessages(message){
    $("#messages").append(`<h4> ${message.name} </h4> <p> ${message.message} </p>`)
}
function getMessages(){
  $.get('http://localhost:3000/messages', (data) => {
    data.forEach(addMessages);
  })
}
function sendMessage(message){
  $.post('http://localhost:3000/messages', message)
}