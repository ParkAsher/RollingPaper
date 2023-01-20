const express = require("express");
const router = express();

const PostController = require("../controllers/post_controller");
const auth = require("../middleware/auth");
const postController = new PostController();

router.post("/", postController.createPost);
router.get("/", postController.loadPost);
router.get("/:postId", auth, postController.getPost);

module.exports = router;
