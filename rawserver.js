// raw server.js (no npm required)
const http = require('http')
const server = http.createServer((req, res) => {
    // req: Incoming request(method, url, headers)
    // res: Outgoing response (write, end)

if (req.method === 'GET' && req.url === '/') {
    // Manual route check
res.writeHead(200, {'Content-Type': 'text/plain' }); // Mannual headers
res.end('Hello from Raw Node.js!'); // Send body & close
} else {
    res.writeHead(404, {'Content-Type':'text/plain' });
    res.end('Not Found :('); // Basic error
}
})

const PORT =3000;
server.listen(PORT, () => {
    console.log('Raw server running on http://localhost:${PORT}');
})