const http = require('node:http');
const PORT = 3001;

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello, World!\n');
// });

const server = new http.Server();
server.on('request', (req, res) => {
    console.log('Request received: ', req.method, req.url);
    let url = req.url;
    if (url.startsWith('/api')) {

        let todos = [
            {
                id: 1,
                title: 'Task1'
            },
            {
                id: 2,
                title: 'Task2'
            }
        ];

        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify(todos));

    } else {
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.end('<h1>Hello from HttpServerDemo</h1>');
    }
});

server.listen(PORT, () => {
    console.log(`Server is listening on http://127.0.0.1:${PORT}`);
})