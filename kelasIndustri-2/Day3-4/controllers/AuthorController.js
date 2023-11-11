const mysql2 = require('mysql2');
const dbconfig = require('../config/database');
const {
    responseNotFound,
    responseSuccess
} = require('../traits/ApiResponse');
const pool = mysql2.createPool(dbconfig);

const getAuthors = (req, res) => {
    const query = "SELECT * FROM authors"

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(query, (err, result) => {
            if (err) throw err;
            responseSuccess(res, result, 'Authors data successfully fetched');
        })

        connection.release();
    })
}

const getAuthorById = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM authors WHERE id = ${id}`;

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(query, (err, result) => {
            if (err) throw err;

            if ( result.length === 0) {
                responseNotFound(res);
                return;
            }

            responseSuccess(res, result, 'Author data successfully fetched');
        })

        connection.release();
    })
}

const updateAuthor = (req, res) => {
    const id = req.params.id;
    const {name, email, alamat, umur, media_sosial} = req.body;
    const query = "UPDATE authors SET name = ?, email = ?, alamat = ?, umur = ?, media_sosial = ? WHERE id = ?";

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(query, [name, email, alamat, umur, media_sosial, id], (err, result) => {
            if (err) {
                console.error('Error updating the record:', err);
                return;
            }

            if (result.affectedRows === 0) {
                responseNotFound(res);
            } else {
                responseSuccess(res, result, 'Author data successfully updated');
            }
        });

        connection.release();
    });
}

const addAuthor = (req, res) => {
    const {name, email, alamat, umur, media_sosial} = req.body;

    const query = "INSERT INTO authors (name, email, alamat, umur, media_sosial) VALUES (?, ?, ?, ?, ?)";

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error establishing database connection:', err);
            return;
        }

        connection.query(query, [name, email, alamat, umur, media_sosial], (err, result) => {
            if (err) {
                console.error('Error adding the book:', err);
            } else {
                responseSuccess(res, result, 'Author data successfully added');
            }
        });

        connection.release();
    });
}

const deleteAuthor = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM authors WHERE id = ${id}`;

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error establishing database connection:', err);
            return;
        }

        connection.query(query, (err, result) => {
            if (err) {
                console.error('Error deleting the book:', err);
            } else if (result.affectedRows === 0) {
                responseNotFound(res);
            } else {
                responseSuccess(res, result, 'Author data successfully deleted');
            }
        });

        connection.release();
    });
}

module.exports = {
    getAuthors,
    getAuthorById,
    updateAuthor,
    addAuthor,
    deleteAuthor
}