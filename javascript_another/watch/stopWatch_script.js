const countElement = document.getElementById("count");
const resetValueElement = document.querySelector(".resetValue");
let startCount = 0;
let intervalId;

// Function to start the timer
// have to increase the count in 1sec so use setInterval

const startTimer = () => {
    intervalId = setInterval( () => {
        countElement.innerText = startCount++;
    }, 1000);
};

// Function to stop the timer and show stop time
const stopTimer = () => {
    clearInterval(intervalId);
};

// Function to reset the timer
const resetTimer = () => {
    clearInterval(intervalId);
    startCount = 0;
    countElement.innerText = startCount;
};


// Show stop time
const showStopValue = () => {
    const p = document.createElement("p");

    p.innerText = `Stopped at: ${startCount} seconds`;

    resetValueElement.appendChild(p);
};

// Clear recorded times
const clearTimeValue = () => {
    resetValueElement.innerHTML = "";
};


// Event listeners
document
    .querySelector(".start_btn")
    .addEventListener("click", startTimer);

document
    .querySelector(".reset_btn")
    .addEventListener("click", resetTimer);

document.querySelector(".stop_btn").addEventListener("click", stopTimer);

document
    .querySelector(".time_btn")
    .addEventListener("click", showStopValue);

document
    .querySelector(".clear_btn")
    .addEventListener("click", clearTimeValue);
