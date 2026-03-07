console.log('clock.js is loaded.');

const clockEl = document.getElementById("clock");

setInterval(() => {
    let time = new Date().toLocaleString();
    clockEl.innerText = time;
},1000);