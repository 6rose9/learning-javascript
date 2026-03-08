// console.log('clock.js is loaded.');

// ------------- if script loaded more than one,
//               then Identifier 'clockEl' has already been declared ERROR -------------
// let clockEl = document.getElementById("clock");

// setInterval(() => {
//     let time = new Date().toLocaleString();
//     clockEl.innerText = time;
// },1000);

// function api(){
//     console.log("API called");
// }

// IIFE module pattern
window.ClockJS = window.ClockJS || (function () {
    
    console.log('clock.js is loaded.');

    let clockEl = document.getElementById("clock");

    setInterval(() => {
        let time = new Date().toLocaleString();
        clockEl.innerText = time;
    }, 1000);

    function api() {
        console.log("API called");
    }

    return {
        api
    };
})();