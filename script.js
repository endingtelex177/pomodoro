//h1 element of the timer 

//the timer identity
let timer_display = document.getElementById("timer");

//a function that let user input their own interval timer and the timer will start with a press of a button

// setInterval(() => {
//    timer_display.innerHTML = t 
//    t--
// },1000)

// taken a input from the input id 
const timer_button = document.getElementById("button_timer")

timer_button.onclick = ()=> {
    let user_value = document.getElementById("input_timer").value;
    timer_display.innerHTML = user_value;
}

//~~~~~ using padStart to add '0' on the number. have to be converted into string first ~~~~~
// console.log("3".padStart(2,0))

