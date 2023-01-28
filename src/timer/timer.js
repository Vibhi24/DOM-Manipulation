// let timerValue = 00;
// let interval;
// let start = document.getElementById("start");
// let stop = document.getElementById("stop");
// let reset = document.getElementById("reset");
// let timerPara = document.getElementById("timerPara");

let seconds = 00;
let minutes = 00;
let hours = 00;
// let timer = document.getElementById('timePara')
let interval;

// start.addEventListener('click', () => {
//     interval = setInterval(startTimer, 1000)
// })
// stop.addEventListener('click', () => {
//     clearInterval(interval)
// })
// reset.addEventListener('click', () => {
//     clearInterval(interval);
//     timerValue = '00';
//     timerPara.innerText = timerValue;
// })

const startTimer = () => {
    seconds++;
    if(seconds == 60){
        seconds = 0;
        minutes += 1;
        if (minutes == 60){
            minutes = 0;
            hours += 1;
        }
    }

    let hrs = hours<10 ? "0"+hours : hours;
    let mins = minutes<10 ? "0"+minutes : minutes;
    let secs = seconds<10 ? "0"+seconds : seconds;

    timerPara.innerText = hrs + " : " + mins + " : " + secs;
}

const createTimer = () => {
    const timerContainer = document.createElement('div');
    const timer = document.createElement('div');
    const outer_circle = document.createElement('div');
    const inner_circle = document.createElement('div');
    const timerParagraph = document.createElement('p')
    const buttonContainer = document.createElement('div') 
    const startBtn = document.createElement('button')
    const pauseBtn = document.createElement('button')
    const resetBtn = document.createElement('button')
    const  laps = document.createElement('div')


    // timerContainer.classList.add('timerContainer')
    timerContainer.id = "timerContainer"
    timer.classList.add('timer')
    outer_circle.classList.add('outer_circle')
    inner_circle.classList.add('inner_circle')
    timerParagraph.id = 'timerPara'
    buttonContainer.classList.add('buttonContainer')
    startBtn.id = 'start'
    pauseBtn.id = "pause"
    resetBtn.id = "reset"
    laps.classList.add('laps')

    timerParagraph.innerText = "00 : 00 : 00";
    // startBtn.innerText = "Start";
    // pauseBtn.innerText = "Pause";
    // resetBtn.innerText = "Reset";

    startBtn.addEventListener('click', () => {
        interval = setInterval(startTimer, 1000)
    })
    pauseBtn.addEventListener('click', () => {
            clearInterval(interval)
        })
    resetBtn.addEventListener('click', () => {
        
        clearInterval(interval)
        seconds = 0;
        minutes = 0;
        hours = 0;
        timerPara.innerText = "00 : 00 : 00";
    })


    timerContainer.appendChild(timer)
    timer.appendChild(outer_circle)
    outer_circle.appendChild(inner_circle)
    inner_circle.appendChild(timerParagraph)
    timer.appendChild(buttonContainer)
    buttonContainer.appendChild(pauseBtn)
    buttonContainer.appendChild(startBtn)
    
    buttonContainer.appendChild(resetBtn)
    timerContainer.appendChild(laps)

    const rootDiv = document.getElementById('root')
    rootDiv.appendChild(timerContainer)
    return createTimer;
}
// createTimer();
// export default createTimer;