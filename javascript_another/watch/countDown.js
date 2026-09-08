const minutesInput = document.getElementById("minutes");
const secondsInput = document.getElementById("seconds");

const countdownElement = document.getElementById("countdown");

const startButton = document.getElementById("startCountdown");
const pauseButton = document.getElementById("pauseCountdown");
const resetButton = document.getElementById("resetCountdown");

let intervalId;
let totalSeconds = 0;


// Start countdown
const startCountdown = () => {

    // If timer is already running, don't create another interval
    if (intervalId) {
        return;
    }

    // Take input only when timer has not started
    if (totalSeconds === 0) {
        const minutes = Number(minutesInput.value);
        const seconds = Number(secondsInput.value);

        totalSeconds = minutes * 60 + seconds;
    }

    // Don't start if time is 0
    if (totalSeconds <= 0) {
        return;
    }

    intervalId = setInterval(() => {

        let minutes = Math.floor(totalSeconds / 60);
        let seconds = totalSeconds % 60;

        countdownElement.innerText =
            `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;

        totalSeconds--;

        // Stop when countdown reaches 0
        if (totalSeconds < 0) {
            clearInterval(intervalId);
            intervalId = null;

            countdownElement.innerText = "00:00";
        }

    }, 1000);
};


// Pause countdown
const pauseCountdown = () => {

    clearInterval(intervalId);
    intervalId = null;
};


// Reset countdown
const resetCountdown = () => {

    clearInterval(intervalId);
    intervalId = null;

    totalSeconds = 0;

    countdownElement.innerText = "00:00";

    minutesInput.value = "";
    secondsInput.value = "";
};


// Event listeners

startButton.addEventListener("click", startCountdown);

pauseButton.addEventListener("click", pauseCountdown);

resetButton.addEventListener("click", resetCountdown);