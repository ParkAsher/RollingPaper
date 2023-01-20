const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
    nickname: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Post", PostSchema);
