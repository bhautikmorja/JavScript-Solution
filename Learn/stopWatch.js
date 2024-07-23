let timeInterval;
let timerValue = 0;
let running = false;

function startTime() {
  if (!running) {
    running = true;
    timeInterval = setInterval(updateTime, 1000);
  }
}

function stopTime() {
  if (running) {
    running = false;
    clearInterval(timeInterval);
  }
}

function resetTime() {
  stopTime();
  timerValue = 0;
  updateDisplay();
}

function updateTime() {
  timerValue++;
  updateDisplay();
}

function updateDisplay() {
  const hours = Math.floor(timerValue / 3600);
  const minute = Math.floor((timerValue % 3600) / 60);
  const second = timerValue % 60;

  const formateTime = hours + ":" + minute + ":" + second;

  document.getElementById("timer").textContent = formateTime;
}
