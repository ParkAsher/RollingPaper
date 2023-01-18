const Post = require("../schemas/post.js");

class PostRepository {
    createPost = async (nickname, content) => {
        await Post.create({nickname, content});

        return;
    };
    getPost = async (req, res) => {
        const readMe = await Post.findById(post_id);
        return readMe;
    };
}

module.exports = PostRepository;
