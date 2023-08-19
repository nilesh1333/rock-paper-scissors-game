let fun = () => {
let user_input_enters = prompt("rock,paper,scissors......enter any one ,please enter correct spelling as i written and in lowercase"); 
   let user_input_data=user_input_enters.toLowerCase();
   console.log(user_input_data);
    let user_input = document.getElementById("user-input");
    let computer_input = document.getElementById("computer-input");
    let result = document.getElementById("result");
    let button = document.getElementById("button");
    let header_image = document.getElementById("headerimage");
if(user_input_data == "rock" || user_input_data == "paper" || user_input_data == "scissors"){
    
    user_input.innerHTML = user_input_data;
    
const option = ["rock","paper","scissors"];
let random = Math.floor(Math.random() * 3);
let system = option[random];

computer_input.innerHTML = system;

if(user_input_data == "rock" && system =="paper"){
    result.innerHTML="Compuer Won";
}
else if(user_input_data == "paper" && system =="rock"){
    result.innerHTML="You Won";
}
else if(user_input_data == "paper" && system =="scissors"){
    result.innerHTML="Compuer Won";
}
else if(user_input_data == "scissors" && system =="paper"){
    result.innerHTML="You Won";
}
else if(user_input_data == "scissors" && system =="rock"){
    result.innerHTML="Compuer Won";
}
else if(user_input_data == "rock" && system =="scissors"){
    result.innerHTML="You Won";
}
else{
    result.innerHTML="Tie";
}
button.innerHTML="Replay";
// button.style.background = "#D71313";
}

else{
    alert("please enter correct spelling like this : 'rock,paper,scissors'");
}
}

