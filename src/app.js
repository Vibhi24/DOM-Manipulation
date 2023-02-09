function counterFunc() {
  if (document.getElementById("counterContainer")) {
    document.getElementById("counterContainer").remove();
  }
  if (document.getElementById("timerContainer")) {
    document.getElementById("timerContainer").remove();
  }
  const createCounte = createCounter();
  var counter = document.createElement('div');
  counter.innerHTML = createCounte;
  counter.style.display = "none";
  document.getElementById("root").appendChild(counter);
}
function timerFunc () {
  if (document.getElementById("counterContainer")) {
    document.getElementById("counterContainer").remove();
  }
  if (document.getElementById("timerContainer")) {
    document.getElementById("timerContainer").remove();
  }
  const createTime = createTimer();
  var timer = document.createElement('div');
  timer.innerHTML = createTime;
  timer.style.display = "none";
  document.getElementById("root").appendChild(timer);
}


const createPage = () => {
  const container = document.createElement('div')
  const containerHead = document.createElement('h1')
  const btns = document.createElement('div')
  const counterDiv = document.createElement('div')
  const counterBtn = document.createElement('input')
  const counterLabel = document.createElement('label')
  const timerDiv = document.createElement('div')
  const timerBtn = document.createElement('input')
  const timerLabel = document.createElement('label')


  counterLabel.innerHTML = "Counter";
  counterBtn.name = "radioButton";
  counterBtn.type = "radio";
  counterBtn.value = "Counter";

  timerLabel.innerHTML = "Timer"
  timerBtn.type = "radio";
  timerBtn.value = "Timer";
  timerBtn.name = "radioButton"
  containerHead.innerHTML = "COUNTER OR TIMER"

  container.classList.add("container");
  containerHead.classList.add("containerHead")
  counterDiv.classList.add("counterDiv")
  timerDiv.classList.add("timerDiv");
  btns.classList.add("btns");
  counterLabel.id = "counterLabel";
  counterBtn.id = "counterBtn";
  timerBtn.id = "timerBtn";
  timerLabel.id = "timerLabel";

  counterBtn.addEventListener('click', counterFunc)
  timerBtn.addEventListener('click', timerFunc)

  container.appendChild(containerHead);
  container.appendChild(btns)
  btns.appendChild(counterDiv);
  counterDiv.appendChild(counterBtn)
  counterDiv.appendChild(counterLabel)
  btns.appendChild(timerDiv)
  timerDiv.appendChild(timerBtn);
  timerDiv.appendChild(timerLabel);
  document.getElementById("root").appendChild(container);
}
createPage();