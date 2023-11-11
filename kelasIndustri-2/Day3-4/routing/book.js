const express = require('express');
const router = express.Router();
const {
    getBooks,
    getBookById,
    updateBook,
    addBook,
    deleteBook,
    search,
    sortBy
} = require('../controllers/BookController')

router.post('/add', addBook);
router.get('/all', getBooks)
router.get('/choose/:id', getBookById)
router.put('/update/:id', updateBook);
router.delete('/delete/:id', deleteBook);
router.get('/search', search);
router.get('/sort', sortBy);

module.exports = router