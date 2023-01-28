let count = 0;

const incrementCount = () => {
    count = count + 1;
    const countValue = document.getElementById('countValue');
    updateCount();
}

const decrementCount = () => {
    count = count - 1;
    const countValue = document.getElementById('countValue');
    updateCount();
}

const updateCount = () => {
    countValue.innerText = `count : ${count}`
}


const createCounter = () => {
    //create relevant HTML dom elements
    const counterContainer = document.createElement("div")
    const counter = document.createElement('div');
    const counterHeading = document.createElement("h1")
    const outer_circle = document.createElement('div');
    const inner_circle = document.createElement('div');
    const countPara = document.createElement("p")
    const buttonContainer = document.createElement("div");
    const incrementButton = document.createElement("button");
    const decrementButton = document.createElement("button");


    // add ids to button 
    counterContainer.id = 'counterContainer'
    counter.classList.add('counter')
    counterHeading.classList.add('counterHeading')
    outer_circle.classList.add('outer_circle')
    inner_circle.classList.add('inner_circle')
    countPara.id = 'countValue';
    buttonContainer.classList.add("buttonContainer")
    incrementButton.id = "increment";
    decrementButton.id = "decrement";

    //add text to button
    counterHeading.innerText = "Counter";
    countPara.innerText = `Count : ${count}`;

    // adding event listener
    decrementButton.onclick = decrementCount;
    incrementButton.addEventListener("click", incrementCount)

    // add child element 
    counterContainer.appendChild(counter);
    // counter.appendChild(counterHeading)
    counter.appendChild(outer_circle)
    outer_circle.appendChild(inner_circle)
    inner_circle.appendChild(countPara);
    // counter.appendChild(countPara);
    counterContainer.appendChild(buttonContainer)
    buttonContainer.appendChild(incrementButton);
    buttonContainer.appendChild(decrementButton);
    const rootDiv = document.getElementById("root")
    rootDiv.appendChild(counterContainer)
    return createCounter;
}
// createCounter();
// export default createCounter;