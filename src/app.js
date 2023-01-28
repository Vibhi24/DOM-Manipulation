const counterFunc = () => {
  if (document.getElementById("timerContainer")) {
    document.getElementById("timerContainer").remove();
  }
  if (document.getElementById("counterContainer")) {
    document.getElementById("counterContainer").remove();
  }
  const createCounte = createCounter();
  let rootDiv = document.getElementById("root");
  rootDiv.appendChild(createCounte)
}
const timerFunc = () => {
  if (document.getElementById("timerContainer")) {
    document.getElementById("timerContainer").remove();
  }
  if (document.getElementById("counterContainer")) {
    document.getElementById("counterContainer").remove();
  }
  const createTime = createTimer();
  let rootDiv = document.getElementById("root")
  rootDiv.appendChild(createTime)
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


  counterLabel.innerText = "Counter";
  counterBtn.name = "radioButton";
  counterBtn.type = "radio";
  counterBtn.value = "Counter";

  timerLabel.innerText = "Timer"
  timerBtn.type = "radio";
  timerBtn.value = "Timer";
  timerBtn.name = "radioButton"
  containerHead.innerText = "COUNTER OR TIMER"

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
  const rootDiv = document.getElementById("root");
  rootDiv.appendChild(container);
}
createPage();