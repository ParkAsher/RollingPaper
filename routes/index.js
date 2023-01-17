const express = require('express');
const router = express.Router();

// routes
const postRouter = require('./post_router.js');
const userRouter = require('./user_router.js');

router.use('/posts', postRouter);
router.use('/users', userRouter);

module.exports = router;
