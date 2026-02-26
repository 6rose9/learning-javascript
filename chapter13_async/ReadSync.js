const fs = require('node:fs');
let start = new Date().getTime();
console.log('start...', start);

let data1 = fs.readFileSync('./files/what.txt'); // block CPU to do next task bcz IO doesn't finish yet
let data2 = fs.readFileSync('./files/why.txt');
let data3 = fs.readFileSync('./files/details.txt');

let end = new Date().getTime();
console.log('end...', end);

let time = (end - start);
console.log('Time ', time);

console.log('Length1 ', data1.toString().length);
console.log('Length2 ', data2.toString().length);
console.log('Length3 ', data3.toString().length);
