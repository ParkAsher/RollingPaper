const express = require('express');
const router = express();

const PostController = require('../controllers/post_controller');
const postController = new PostController();

router.post('/', postController.createPost);

module.exports = router;