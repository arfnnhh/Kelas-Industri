const express = require('express');
const router = express.Router();
const {
    getAuthors,
    getAuthorById,
    updateAuthor,
    addAuthor,
    deleteAuthor,
} = require('../controllers/AuthorController')

router.get('/all', getAuthors)
router.get('/choose/:id', getAuthorById)
router.put('/update/:id', updateAuthor)
router.post('/add', addAuthor)
router.delete('/delete/:id', deleteAuthor)


module.exports = router