const express = require('express')
const bookRoute = require('../routing/book')
const authRoute = require('../routing/auth')
const jwt = require('jsonwebtoken')
const accessTokenSecret = ('2023WikramaExpress')

const app = express();

app.use(express.json())
app.use(express.urlencoded({
    extended: true,
}))

const authenticateJWT = (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) {
        return res.status(403).json({
            message: 'Unauthorized'
        });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(token, accessTokenSecret, (err, user) => {
        if (err) {
            return res.status(403).json({
                message: 'Unauthorized'
            });
        }

        next();
    });
};


module.exports = authenticateJWT;