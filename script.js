// This function displays current UTC time
function updateUTCTime() {
    const utcTimeElement = document.getElementById('utc-time');
    const options = { timeZone: 'UTC', hour12: false, timeStyle: 'short' };
    const utcTimeString = new Date().toLocaleTimeString([], options);
    utcTimeElement.textContent = utcTimeString;
}

// This line of code updates the UTC time every second
setInterval(updateUTCTime, 1000);

// This calls the function that sets the initial UTC time
updateUTCTime();
