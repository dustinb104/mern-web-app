// We use asyncHandler so that we can use the async/await
// syntax when we are making calls to our database.
const asyncHandler = require('express-async-handler')

const Post = require('../models/postModel')
const User = require('../models/userModel')

// @desc Get Posts
// @route GET /api/posts
// @access Private
const getPosts = asyncHandler(async (req, res) => {
    const posts = await Post.find({ user: req.user.id})

    res.status(200).json(posts)
})

// @desc Set Post
// @route POST /api/posts
// @access Private
const setPost = asyncHandler(async (req, res) => {
    if(!req.body.text){
        res.status(400)
        throw new Error('Please add a text field')
    }

    const post = await Post.create({
        text: req.body.text,
        user: req.user.id
    })

    res.status(200).json(post)
})

// @desc Update Post
// @route PUT /api/posts/:id
// @access Private
const updatePost = asyncHandler(async (req, res) => {

    const post = await Post.findById(req.params.id)

    if(!post){
        res.status(400)
        throw new Error('Post not found')
    }

    const user = await User.findById(req.user.id)

    // check if user exists
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // make sure the logged in user matches the post user
    if(post.user.toString() != user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    const updatedPost = await Post.findByIdAndUpdate(req.params.id, req.body, {new: true})

    res.status(200).json(updatedPost)
})

// @desc Delete Post
// @route DELETE /api/posts/:id
// @access Private
const deletePost = asyncHandler(async (req, res) => {

    const post = await Post.findById(req.params.id)

    if(!post){
        res.status(400)
        throw new Error('Post not found')
    }

    const user = await User.findById(req.user.id)

    // check if user exists
    if(!user){
        res.status(401)
        throw new Error('User not found')
    }

    // make sure the logged in user matches the post user
    if(post.user.toString() != user.id){
        res.status(401)
        throw new Error('User not authorized')
    }

    await post.deleteOne()

    res.status(200).json({id: req.params.id})
})

module.exports = {
    getPosts,
    setPost,
    updatePost,
    deletePost
}