const express = require('express')
const router = express.Router()
const {getPosts, setPost, updatePost, deletePost} = require('../controllers/postController')

// router.get('/', getPosts)
// router.post('/', setPost)
router.route('/').get(getPosts).post(setPost)

// router.put('/:id', updatePost)
// router.delete('/:id',  deletePost)
router.route('/:id').put(updatePost).delete(deletePost)

module.exports = router