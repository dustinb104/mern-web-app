const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')
const asyncHanlder = require('express-async-handler')
const User = require('../models/userModel')

// @desc Register User
// @route POST /api/users
// @access Public
const registerUser = asyncHanlder(async(req, res) => {
    const {name, email, password} = req.body

    if(!name || !email || !email){
        res.status(400)
        throw new Error('Please add all fields')
    }

    // check if user exists
    const userExists = await User.findOne({email})

    if(userExists){
        res.status(400)
        throw new Error('User already exists')
    }

    // hash password
    const salt = await bcrypt.genSalt(10)
    const hashedPassword = await bcrypt.hash(password, salt)

    // create user
    const user = await User.create({
        name,
        email,
        password: hashedPassword
    })

    if(user){
        res.status(201).json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    }else {
        res.status(400)
        throw new Error('Invalid user data')
    }
})

// @desc Authenticate User
// @route POST /api/users/login
// @access Public
const loginUser = asyncHanlder(async(req, res) => {
    const {email, password} = req.body

    const user = await User.findOne({email})

    if(user && (await bcrypt.compare(password, user.password))){
        res.json({
            _id: user.id,
            name: user.name,
            email: user.email,
            token: generateToken(user._id)
        })
    } else {
        res.status(400)
        throw new Error('Invalid Credentials')
    }

})

// @desc Get user data
// @route GET /api/users/me
// @access Private
const getMe = asyncHanlder(async(req, res) => {
    const {_id, name, email} = await User.findById(req.user.id)

    res.status(200).json({
        id: _id,
        name,
        email,
    })
})

// generate JWT
const generateToken = (id) => {
    return jwt.sign({id}, process.env.JWT_SECRET, {
        expiresIn: '30d'
    })
}

module.exports = {
    registerUser,
    loginUser,
    getMe
}