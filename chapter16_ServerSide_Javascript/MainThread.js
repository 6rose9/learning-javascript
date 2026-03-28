const threads = require('node:worker_threads');
if (threads.isMainThread) {
    console.log('Main Thread');
} else {
    console.log('Worker Thread');
}