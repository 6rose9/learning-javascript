const threads = require('node:worker_threads');
const path = require('node:path');

if (threads.isMainThread) {
    
    // console.log('Main Thread');
    
    const worker = new threads.Worker(path.resolve(__dirname, 'files/worker1.js'));
    worker.postMessage('Hello worker, I am your main thread.');

    worker.on('message', (msg) => {
        console.log('worker:', msg);
    });

} else {
    console.log('Worker Thread');
}