const dbConfig = require('../config/database')
const mysql = require('mysql2')
const jwt = require('jsonwebtoken')
const pool = mysql.createPool(dbConfig)
const {
    responseAuthSuccess,
    responseFailValidate
} = require('../traits/ApiResponse')

pool.on('error', (err) => {
    console.error(err)
})

const accessTokenSecret = '2023WikramaExpress'

const register = (req, res) => {
    const data = {
        email: req.body.email,
        username: req.body.username,
        password: req.body.password
    }

    pool.getConnection((err, connection) => {
        if (err) { throw err }

    })

    if (data.email == null || data.username == null || data.password == null) {
        responseFailValidate(res, 'Email/Username/Password is required')
    } else {
        const query = 'INSERT INTO users SET ?'

        const query2 = `SELECT * FROM users WHERE email='${data.email}'OR username='${data.username}'`

        pool.getConnection(async (err, connection) => {
            if (err) { throw err }

            var checkUnique = new Promise((resolve) => {
                connection.query(query2,(err, result) => {
                    if (err) { throw err }

                    if (result.length > 0) {
                        res.status(403).json({
                            message: 'Email/Username is taken'
                        })
                    } else {
                        resolve();
                    }
                })
            })

            await checkUnique.then(() => {
                connection.query(query,[data], (err, result) => {
                    if (err) { throw err }

                    if (result.affectedRows >= 1) {
                        const token = jwt.sign({
                            email: data.email,
                            username: data.username
                        }, accessTokenSecret)

                        responseAuthSuccess(res, token, 'Registered successfully', {
                            email: data.email,
                            username: data.username
                        })
                    } else {
                        res.status(500).json({
                            message: 'failed creating user'
                        })
                    }
                })
            })

            connection.release()
        })
    }
}

const login = (req, res) => {
    const {email, password} = req.body

    if (email == null || password == null) {
        responseFailValidate(res, 'Email/Password is required')
    } else {
        const query = `SELECT * FROM users WHERE email = '${email}' AND password = '${password}'`

        pool.getConnection((err, connection) => {
            if (err) { throw err }

            connection.query(query, (err, result) => {
                if (err) { throw err }

                if (result.length >= 1) {
                    const user = result.pop()

                    const token = jwt.sign({
                        email: user.email,
                        username: user.username
                    }, accessTokenSecret)

                    responseAuthSuccess(res, token, 'Login success', {
                        email: user.email,
                        username: user.username
                    })

                    return
                }

                res.status(404).json({
                    message: 'Email or password is incorrect'
                })
            })

            connection.release()
        })
    }
}

module.exports = {
    register,
    login
}