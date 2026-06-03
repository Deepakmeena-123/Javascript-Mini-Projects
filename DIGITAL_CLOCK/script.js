const clock = document.getElementById('clock');

const dateElement = document.getElementById('date');

function updateTime(){

    const now = new Date();

    // Time
    clock.innerHTML = now.toLocaleTimeString();

    // Date
    dateElement.innerHTML = now.toDateString();

}

// Run immediately
updateTime();

// Update every second
setInterval(updateTime, 1000);