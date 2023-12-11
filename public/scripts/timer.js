let intervalId;
let totalSeconds = 30;

function startTimer() {
  intervalId = setInterval(updateTimer, 1000);
}

function stopTimer() {
  clearInterval(intervalId);
}

function updateTimer() {
  totalSeconds--;

  if (totalSeconds < 0) {
    stopTimer();
    alert('Tempo esgotado!');
    return;
  }

  const minutes = Math.floor(totalSeconds / 60);
  const seconds = totalSeconds % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  document.getElementById('timer').textContent = `${formattedMinutes}:${formattedSeconds}`;
}

export default startTimer;
