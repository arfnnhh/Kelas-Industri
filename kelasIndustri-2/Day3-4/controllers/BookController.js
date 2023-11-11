const mysql = require('mysql2');
const dbconfig = require('../config/database');
const {
    responseNotFound,
    responseSuccess
} = require('../traits/ApiResponse');
const pool = mysql.createPool(dbconfig);

const getBooks = (req, res) => {
    const query = "SELECT * FROM books"

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(query, (err, result) => {
            if (err) throw err;
            responseSuccess(res, result, 'Book successfully fetched');
        })

        connection.release();
    })
}

const getBookById = (req, res) => {
    const id = req.params.id;
    const query = `SELECT * FROM books WHERE id = ${id}`;

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(query, (err, result) => {
            if (err) throw err;

            if ( result.length === 0) {
                responseNotFound(res);
                return;
            }

            responseSuccess(res, result, 'Book successfully fetched');
        })

        connection.release();
    })
}

const updateBook = (req, res) => {
    const id = req.params.id;
    const {nama, author, year, page, publisher} = req.body;
    const query = "UPDATE books SET nama = ?, author = ?, year = ?, page_count = ?, publisher = ? WHERE id = ?";

    pool.getConnection((err, connection) => {
        if (err) throw err;

        connection.query(query, [nama, author, year, page, publisher, id], (err, result) => {
            if (err) {
                console.error('Error updating the record:', err);
                return;
            }

            if (result.affectedRows === 0) {
                responseNotFound(res);
            } else {
                responseSuccess(res, result, 'Book successfully updated');
            }
        });

        connection.release();
    });
}

const addBook = (req, res) => {
    const {nama, author, year, page, publisher} = req.body;

    const query = "INSERT INTO books (nama, author, year, page_count, publisher) VALUES (?, ?, ?, ?, ?)";

    pool.getConnection((err, connection) => {
        if (err) {
            console.error('Error establishing database connection:', err);
            return;
        }

        connection.query(query, [nama, author, year, page, publisher], (err, result) => {
            if (err) {
                console.error('Error adding the book:', err);
            } else {
                responseSuccess(res, result, 'Book successfully added');
            }
        });

        connection.release();
    });
}

const deleteBook = (req, res) => {
    const id = req.params.id;
    const query = `DELETE FROM books WHERE id = ${id}`;

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
                responseSuccess(res, result, 'Book successfully deleted');
            }
        });

        connection.release();
    });
}

const search = (req, res) => {
    const keyword = req.query.keyword

    const query = `SELECT * FROM books WHERE nama LIKE '%${keyword}'`

    pool.getConnection((err, connection) => {
        if(err) throw err

        connection.query(query, (err, result) => {
            if(err) throw err

            if(result. length == 0){
                return res.json({
                    message : 'Not Found'
                })
            }

            responseSuccess(res, results, 'Book successfully fetched')
        })

        connection.release()
    })
}

sortBy = (req, res) => {
    const orderby = req.query.order

    const query = `SELECT * FROM books ORDER BY nama ${orderby}`

    pool.getConnection((err, connection) => {
        if (err) { throw err }

        connection.query(query, (err, result) => {
            if (err) { throw err }

            if (result.length === 0) {
                responseNotFound(res)
                return res.json({})
            }

            responseSuccess(res, result, 'Books successfully fetched')
        })
        connection.release()
    })
}

module.exports = {
    getBooks,
    getBookById,
    updateBook,
    addBook,
    deleteBook,
    search,
    sortBy
}