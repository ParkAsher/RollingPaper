const express = require("express");
const router = express.Router();

// routes
const postRouter = require("./post_router.js");

router.use("/posts", postRouter);

module.exports = router;
