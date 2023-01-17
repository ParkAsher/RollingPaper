const Post = require('../schemas/post.js');

class PostRepository {
    createPost = async (nickname, content) => {
        await Post.create({nickname, content});

        return
    }
}

module.exports = PostRepository;