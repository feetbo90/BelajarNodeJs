/**
 * Created by mhdiqbalpradipta on 30/04/19.
 */

const http = require('http');
const fs = require('fs');
function rqListener(req, res) {

}
const server = http.createServer((req, res) => {
    console.log(req);
    const url = req.url;
    const method = req.method;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="POST" name="message"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
        return res.end();
    }

    if (url === '/message' && method === 'POST') {
        fs.writeFileSync('hello.txt',"Hello Coy");
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Halo babang ganteng</title></head>');
    res.write('<body><h1>Halo iqbal</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3001);
