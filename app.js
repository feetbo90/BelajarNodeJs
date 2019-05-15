/**
 * Created by mhdiqbalpradipta on 30/04/19.
 */

const http = require('http');

function rqListener(req, res) {

}
const server = http.createServer((req, res) => {
    console.log(req);
    const url = req.url;
    if(url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Enter message</title></head>');
        res.write('<body><form action="/message" method="post" name="message"><input type="text"><button type="submit">Send</button></form></body>');
        res.write('</html>');
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
