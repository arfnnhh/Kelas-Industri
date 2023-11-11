const {
    someData,
    someFunction,
} = require('./commonTest');

const {
    MyPromise,
    panggilPromise,
    delay
} = require('./promiseTest');

var http = require('http');

const countriesData = require('./data.js');

var server = http.createServer(function (req, res) {
    switch (req.url) {
        case '/home':
            res.write("Hi, Selamat datang di nodejs");
            res.end();
            break;
        case '/commont':
            res.write('some data ' + someData + '\nsome function ' + someFunction());
            res.end();
            break;
        case '/promise':
            (async function () {
                await MyPromise.then((result) => {
                    res.write(result);
                    res.end();
                }).catch((error) => {
                    res.write(error);
                    res.end();
                });
            })();
            break;
        case '/test-promise':
            (async () => {
                await panggilPromise(5, 1000).then((data) => {
                    console.log(data);
                }).catch((error) => {
                    console.log(error);
                });
                await panggilPromise(6, 1000).then((data) => {
                    console.log(data);
                }).catch((error) => {
                    console.log(error);
                });
                await panggilPromise(7, 1000).then((data) => {
                    console.log(data);
                }).catch((error) => {
                    console.log(error);
                });
            })();
            res.write('berhasil memanggil promise, promise akan muncul di terminal');
            res.end();
            break;
        case '/country':
            (async function () {
                await delay(5).then((data) => {
                    console.log(data);
                });
                const countryNames = [];
                countriesData.forEach(country => {
                    countryNames.push(country.country);
                });
                res.write(countryNames.join(', '));
                res.end();
            })();
            break;
        case '/capital':
            (async function () {
                await delay(5).then((data) => {
                    console.log(data);
                });
                const capitalNames = [];
                countriesData.forEach(country => {
                    capitalNames.push(country.capital);
                });
                res.write(capitalNames.join(', '));
                res.end();
            })();
            break;
        default:
            res.write('url tidak ditemukan');
            res.end();
            break;
    }
});

const port = 5000;

server.listen(port);

console.log(`Server running on port ${port}`);
