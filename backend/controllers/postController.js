// We use asyncHandler so that we can use the async/await
// syntax when we are making calls to our database.
const asyncHandler = require('express-async-handler')

// @desc Get Posts
// @route GET /api/posts
// @access Private
const getPosts = asyncHandler(async (req, res) => {
    res.status(200).json({message: 'Get posts'})
})

// @desc Set Post
// @route POST /api/posts
// @access Private
const setPost = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    res.status(200).json({message: 'Set post'})
})

// @desc Update Post
// @route PUT /api/posts/:id
// @access Private
const updatePost = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Update post ${req.params.id}`})
})

// @desc Delete Post
// @route DELETE /api/posts/:id
// @access Private
const deletePost = asyncHandler(async (req, res) => {
    res.status(200).json({message: `Delete post ${req.params.id}`})
})

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
}