//h1 element of the timer 

//the timer identity
let timer_display = document.getElementById("timer");
//
// log identity 
let log_display = document.getElementById("log_output");
//a function that let user input their own interval timer and the timer will start with a press of a button

// setInterval(() => {
//    timer_display.innerHTML = t 
//    t--
// },1000)

// a button that that the input and display the timer from the user
const timer_button = document.getElementById("button_timer")
const log_button = document.getElementById("log_timer");
let running_timer;

timer_button.onclick = ()=> {
    clearInterval(running_timer);
    let user_value = document.getElementById("input_timer").value;
    // only take value more than 0 and less then 60
    if (user_value > 0 && user_value <= 60) {
        timer_display.innerHTML = `${user_value}:00`;
        
        // saperate the minute into hours and minutes and seconds HH:MM:SS
        // convert total user input from minutes into second instead. --todo
        let totalSec = user_value * 60;

    running_timer = setInterval(()=>{
        let minutes = Math.floor(totalSec / 60);
        let seconds = totalSec % 60;
        timer_display.innerHTML = `${minutes.toString().padStart(2,0)}:${seconds.toString().padStart(2,0)}`
        totalSec--
        if (totalSec < 0){clearInterval(running_timer);}
    },1000)
}
}
let i = 0;
log_button.onclick = () => {
    let log_output = timer_display.innerHTML;
    log_display.innerHTML = log_output;
    localStorage.setItem(i,log_output);
    i++ 
}
localStorage.clear();
//~~~~~ using padStart to add '0' on the number. have to be converted into string first ~~~~~
// console.log("3".padStart(2,0))