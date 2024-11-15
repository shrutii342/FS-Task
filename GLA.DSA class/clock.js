// Clock
function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    document.getElementById('currentTime').textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);

//   // Stopwatch
let stopwatchInterval;
let stopwatchSeconds = 0;
function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchSeconds++;
        const hours = String(Math.floor(stopwatchSeconds / 3600)).padStart(2, '0');
        const minutes = String(Math.floor((stopwatchSeconds % 3600) / 60)).padStart(2, '0');
        const seconds = String(stopwatchSeconds % 60).padStart(2, '0');
        document.getElementById('stopwatchTime').textContent = `${hours}:${minutes}:${seconds}`;
    }, 1000);
}
function stopStopwatch() {
    clearInterval(stopwatchInterval);
}
function resetStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchSeconds = 0;
    document.getElementById('stopwatchTime').textContent = "00:00:00";
}
  
  // Timer
  let timerInterval;
  let timerTimeLeft = 0;
  
  function startTimer() {
    const minutes = parseInt(document.getElementById('timerMinutes').value) || 0;
    const seconds = parseInt(document.getElementById('timerSeconds').value) || 0;
    timerTimeLeft = minutes * 60 + seconds;
  
    timerInterval = setInterval(() => {
      if (timerTimeLeft <= 0) {
        clearInterval(timerInterval);
        alert("Timer Done!");
        return;
      }
      timerTimeLeft--;
      const displayMinutes = String(Math.floor(timerTimeLeft / 60)).padStart(2, '0');
      const displaySeconds = String(timerTimeLeft % 60).padStart(2, '0');
      document.getElementById('timerDisplay').textContent = `${displayMinutes}:${displaySeconds}`;
    }, 1000);
  }
  
  function stopTimer() {
    clearInterval(timerInterval);
  }
  
  function resetTimer() {
    clearInterval(timerInterval);
    timerTimeLeft = 0;
    document.getElementById('timerDisplay').textContent = "00:00";
  }
  
  // Alarm
  let alarmTime;
  let alarmInterval;
  
  function setAlarm() {
    alarmTime = document.getElementById('alarmTime').value;
    if (alarmTime) {
      document.getElementById('alarmStatus').textContent = `Alarm set for ${alarmTime}`;
      alarmInterval = setInterval(checkAlarm, 1000);
    }
  }
  
  function clearAlarm() {
    clearInterval(alarmInterval);
    alarmTime = null;
    document.getElementById('alarmStatus').textContent = "Alarm not set";
  }
  
  function checkAlarm() {
    const now = new Date();
    const currentTime = `${String(now.getHours()).padStart(2, '0')}:${String(now.getMinutes()).padStart(2, '0')}`;
    if (currentTime === alarmTime) {
      alert("Alarm Ringing!");
      clearAlarm();
    }
  }
  
  // Switch between sections
  function showSection(section) {
    document.querySelectorAll('.section').forEach(el => el.classList.remove('active'));
    document.getElementById(section).classList.add('active');
  }
  