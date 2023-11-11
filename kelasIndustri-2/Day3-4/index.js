const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');
const bookRoute = require('./routing/book');
const authorRoute = require('./routing/author');
const authRoute = require('./routing/auth');
const dbconfig = require('./config/database')
const pool = mysql.createPool(dbconfig);
const authenticateJWT = require('./middleware/auth')


pool.on('error', (err) => {
    console.log(err)
});

const app = express();
const PORT = 3030;

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

app.use(cors());
app.get('/param/:nama/:jurusan/:nis', (req, res) => {
    res.json(req.params);
    res.end();
})

app.get('/param', (req, res) => {
    res.json(req.query)
})

app.get('/', (req, res) => {
    res.write('Hello, world');
    res.end();
})

app.use('/auth', authRoute);
app.use('/book', authenticateJWT, bookRoute);
app.use('/author', authorRoute);

app.listen(PORT, () => {
    console.log(`Running on port http://localhost:${PORT}`);
});