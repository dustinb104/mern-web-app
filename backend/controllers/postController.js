// @desc Get Posts
// @route GET /api/posts
// @access Private
const getPosts = (req, res) => {
    res.status(200).json({message: 'Get posts'})
}

// @desc Set Post
// @route POST /api/posts
// @access Private
const setPost = (req, res) => {
    console.log(req.body)

    res.status(200).json({message: 'Set post'})
}

// @desc Update Post
// @route PUT /api/posts/:id
// @access Private
const updatePost = (req, res) => {
    res.status(200).json({message: `Update post ${req.params.id}`})
}

// @desc Delete Post
// @route DELETE /api/posts/:id
// @access Private
const deletePost = (req, res) => {
    res.status(200).json({message: `Delete post ${req.params.id}`})
}

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
}