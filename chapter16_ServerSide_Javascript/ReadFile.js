const fs = require('node:fs');
console.log('start...');

// async
fs.readFile('files/hello.txt', 'utf8', (err, data) => {
    if (!err) {
        console.log(data);
    }
});

fs.Promises.readFile('files/hello.txt', 'utf8')
    .then(data => {
        console.log(data);
    }).catch(err => {
        console.log(err);
    });

async function readFile() {
    let data = await fsPromises.readFile('files/hello.txt', 'utf8');
    console.log(data);
}

readFile();

console.log('end');