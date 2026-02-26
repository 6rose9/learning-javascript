const fs = require('fs');

// fs.readFile('./files/what.txt', function (err, data) {
//     console.log('File read done ', data.toString().length);
// });

// console.log('end');

//-------------------------------------------------

let start = new Date().getTime();
let p1 = fs.promises.readFile('./files/what.txt');
let p2 = fs.promises.readFile('./files/why.txt');
let p3 = fs.promises.readFile('./files/details.txt');

Promise.all([p1, p2, p3]).then(data => {
    let end = new Date().getTime();
    let time = end - start;
    console.log("Time ", time);
});