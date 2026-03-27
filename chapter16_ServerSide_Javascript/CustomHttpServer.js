const net = require('node:net');
const fs = require('node:fs');
// const server = net.createServer(socket => {
//     console.log('Client connected');
//     socket.on('data', (data) => {
//         console.log(`Received from client: ${data.toString()}`);
//         socket.write(`Echo from server: ${data.toString()}`);
//     });

//     // End event: called when the client disconnects
//     socket.on('end', () => {
//         console.log('Client disconnected');
//     });
// });

const server = net.createServer();

function writeResponse(socket, url) {

    let body;

    if (url.endsWith('.html')) {
        let filePath = `./files${url}`;
        console.log('url ', url);
        console.log('filePath ', filePath);

        if (fs.existsSync(filePath)) {
            body = fs.readFileSync(filePath, 'utf-8');
        } else {

            body = `<html>
                        <h1>Not Found</h1>
                    </html>`;

            // format
            let response = `HTTP/1.0 400 NotFound\r\n`
                + 'Content-Type: text/html\r\n'
                + 'Connection: Closed\r\n\r\n'
                + body;

            socket.write(response);
            socket.end();
        }
    } else {

        body = `<html>
                 <h1>Hello from Custom HTTP Server</h1>
                </html>`;

        // format
        let response = `HTTP/1.0 200 OK\r\n`
            + 'Content-Type: text/html\r\n'
            + 'Connection: Closed\r\n\r\n'
            + body;

        socket.write(response);
        socket.end();
    }
}

server.on('connection', socket => {

    console.log('Client connected');

    socket.on('data', (data) => {

        let request = data.toString();
        console.log(`Received from client: `);

        let lines = request.split('\r\n');
        let statusLine = lines[0];
        let statusParts = statusLine.split(' ');
        let method = statusParts[0];
        let url = statusParts[1];

        console.log(`Method: ${method}, URL: ${url}`);
        console.log(request);

        // socket.write(`Echo from server: ${request}`);
        // socket.end();
        writeResponse(socket, url);
    });

    // End event: called when the client disconnects
    socket.on('end', () => {
        console.log('Client disconnected');
    });
});

server.listen(3000, () => {
    console.log('Server listening on port 3000');
});