const http = require('http');
const {hello, greet} = require('./function')

const delay = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Waiting done')
            reject('Who are you?');
        }, 1000 * 3);
    });
}

var server = http.createServer(async (req, res) => {
    switch (req.url) {
        case '/':
            hello();
            const value = await
            delay();
            console.log(value);
            greet('Arfan');
            res.write('Ini home');
            res.end();
            break;
        case '/about':
            res.write('Ini about');
            res.end();
            break;
        case '/contact':
            res.write('Ini contact');
            res.end();
            break;
        default:
            res.write('404 Not Found');
            res.end();
            break;
    }
})

const port = 9999;
server.listen(port);
console.log(`Running port on http://localhost:${port}`);