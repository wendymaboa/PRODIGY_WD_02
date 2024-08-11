let stopwatchInterval;
let totalSeconds = 0;
let lapStartTime = 0; // Variable to keep track of the start time for the lap

function startStopwatch() {
    clearInterval(stopwatchInterval);
    stopwatchInterval = setInterval(updateTime, 1000);
    lapStartTime = totalSeconds; // Set the lap start time
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    clearInterval(stopwatchInterval);
    totalSeconds = 0;
    lapStartTime = 0;
    document.getElementById("hours").textContent = "00";
    document.getElementById("minutes").textContent = "00";
    document.getElementById("seconds").textContent = "00";
    document.getElementById("lap-list").innerHTML = ""; // Clear lap times
}

function updateTime() {
    totalSeconds++;
    const days = Math.floor(totalSeconds / 86400);
    const hours = Math.floor((totalSeconds % 86400) / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    document.getElementById("hours").textContent = String(hours).padStart(2, '0');
    document.getElementById("minutes").textContent = String(minutes).padStart(2, '0');
    document.getElementById("seconds").textContent = String(seconds).padStart(2, '0');
}

function recordLap() {
    if (totalSeconds > lapStartTime) {
        const lapTimeSeconds = totalSeconds - lapStartTime;
        lapStartTime = totalSeconds;

        const lapHours = Math.floor(lapTimeSeconds / 3600);
        const lapMinutes = Math.floor((lapTimeSeconds % 3600) / 60);
        const lapSeconds = lapTimeSeconds % 60;

        const lapTime = `${String(lapHours).padStart(2, '0')}:${String(lapMinutes).padStart(2, '0')}:${String(lapSeconds).padStart(2, '0')}`;

        const lapList = document.getElementById("lap-list");
        const lapItem = document.createElement("li");
        lapItem.textContent = lapTime;
        lapList.appendChild(lapItem);
    }
}
