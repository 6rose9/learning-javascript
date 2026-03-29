const {parentPort, workerData} = require('node:worker_threads');
console.log('Worker1.js loaded');
// console. log('Worker Data:', workerData);
// console.log('Parent Port:', parentPort);

parentPort.on('message', (msg) => {
    console.log('main thread:', msg);
});

parentPort.postMessage('Hello, I am a worker. Nice to meet you');