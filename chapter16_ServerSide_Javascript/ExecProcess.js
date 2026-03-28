// not good for security
const child_process = require('node:child_process');
child_process.exec('ls -l', (error, stdout, stderr) => {
    if (error) {
        console.error(`Error executing command: ${error}`);
        return;
    }

    console.log(`Standard output:\n${stdout}`);
    if (stderr) {
        console.log(`Standard Error:\n${stderr}`);
    }
})