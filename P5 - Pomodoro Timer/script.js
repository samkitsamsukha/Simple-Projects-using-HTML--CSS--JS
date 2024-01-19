const startEl = document.getElementById("start");
const stopEl = document.getElementById("stop");
const resetEl = document.getElementById("reset");
const timerEl = document.getElementById("timer");
//console.log(startEl, stopEl, resetEl, timerEl)

let interval;
let timeLeft = 1500; // seconds

function updateTimer(){
    //create minutes and second from time left;
    let minutes = Math.floor(timeLeft/60); // minutes
    let seconds = timeLeft % 60; //remainder is seconds
    formattedTime = `${minutes.toString().padStart(2, "0")}:${seconds.toString().padStart(2, "0")}`;
    timerEl.innerHTML = formattedTime
}

function startTimer(){
    //console.log("Start")
    interval = setInterval(()=>{
        timeLeft--;
        updateTimer();
        if(timeLeft === 0){
            clearInterval(interval);
            alert("Time's Up");
            timeLeft = 1500;
            updateTimer();
            
        }
    }, 1000)
}
function stopTimer(){
    //console.log("Stop")
    clearInterval(interval);
}
function resetTimer(){
    // console.log("Reset")
    clearInterval(interval);
    timeLeft = 1500;
    updateTimer();
}


startEl.addEventListener("click", startTimer);
stopEl.addEventListener("click", stopTimer);
resetEl.addEventListener("click", resetTimer);