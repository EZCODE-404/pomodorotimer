 let timerDisplay = document.querySelector('#timer');
 let startButton = document.querySelector('#start');    
    let stopButton = document.querySelector('#stop');
    let restartButton = document.querySelector('#restart');

    let totalTime = 30 * 60; // 25 minutes in seconds
    let timeLeft = totalTime;
    let isRunning = false;
    let timer;
    function updateDisplay() {
        let minutes = Math.floor(timeLeft / 60);
        let seconds = timeLeft % 60;
        timerDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
        console.log(`Timer: ${timerDisplay.textContent}`);
    }
    function startTimer() {
        if (isRunning) return;
        isRunning = true;
     timer = setInterval(() => {
            if (timeLeft > 0) {
                timeLeft--;
                updateDisplay();
            } else {
                clearInterval(timer);
                isRunning = false;
                alert("Time's up!");
            }
        }, 1000);
    }
    function stopTimer() {
        clearInterval(timer);
        isRunning = false;
    }

    
    function restartTimer() {
        clearInterval(timer);
        isRunning = false;
        timeLeft = totalTime;
        updateDisplay();
    }
    startButton.addEventListener('click', startTimer);
    stopButton.addEventListener('click', stopTimer);    
restartButton.addEventListener('click', restartTimer);
    updateDisplay();




