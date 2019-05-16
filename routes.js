/**
 * Created by mhdiqbalpradipta on 16/05/19.
 */

const fs = require('fs');

const requestHandler = (req, res) => {

    const url = req.url;
    const method = req.method;



    if (url === '/') {
        res.setHeader('Content-Type', 'text/html');
        res.write('<html>');
        res.write('<head><title>Entera message</title></head>');
        res.write('<body><form action="/message" method="POST">' +
            '<input type="text" name="message">' +
            '<button type="submit">Send</button>' +
            '</form>' +
            '</body>');
        res.write('</html>');
        return res.end();
    }


    if (url === '/message' && method === 'POST') {
        const body = [];
        req.on('data', (chunk) => {
            console.log(chunk);
            body.push(chunk);
        });
        return req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log(parsedBody);
            const message = parsedBody.split("=")[1];
            fs.writeFile('hello.txt', message, err => {
                res.statusCode = 302;
                res.setHeader('Location', '/');
                return res.end();

            });
        });
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>Halo babang ganteng</title></head>');
    res.write('<body><h1>Halo iqbal</h1></body>');
    res.write('</html>');
    res.end();

};

module.exports = {
    handler : requestHandler
};

/*
or
module.exports.handler = requestHandler;

or
module.exports = requestHandler;

or
exports.handler = requestHandler;
 */
