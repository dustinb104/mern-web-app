// This is going to overwrite the default express error handler

const errorHandler = (err, req, res, next) => {
    // if status code is set then i want that status code
    // but if not then I will set it 500, which is a server error.
    const statusCode = res.statusCode ? res.statusCode : 500

    // set the status to that status code
    res.status(statusCode)

    // then we will respond with the error message and if we are in development
    // mode then we will return a stack trace.
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === 'production' ? 'null' : err.stack
    })
}

module.exports = {
    errorHandler
}