const express = require('express')
const router = express.Router()
const {getPosts, setPost, updatePost, deletePost} = require('../controllers/postController')
const {protect} = require('../middleware/authMiddleware')

// router.get('/', getPosts)
// router.post('/', setPost)
router.route('/').get(protect, getPosts).post(protect, setPost)

// router.put('/:id', updatePost)
// router.delete('/:id',  deletePost)
router.route('/:id').put(protect, updatePost).delete(protect, deletePost)

module.exports = router