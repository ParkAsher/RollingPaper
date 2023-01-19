const Post = require('../schemas/post.js');

class PostRepository {
    createPost = async (nickname, content) => {
        try {
            await Post.create({nickname, content});

            return;
        } catch (error) {
            error.status = 500;
            throw error
        }
    }
}

module.exports = PostRepository;