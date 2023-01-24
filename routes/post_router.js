const express = require('express');
const router = express();

/* Auth Middleware */
const auth = require('../middleware/auth');

/* Controller */
const PostController = require('../controllers/post_controller');
const postController = new PostController();

router.get('/', postController.getPosts);
router.post('/', postController.createPost);
router.get('/:postId', auth, postController.getPost);

module.exports = router;
