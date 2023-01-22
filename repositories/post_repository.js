const Post = require('../schemas/post.js');

class PostRepository {
    loadPostInit = async () => {
        try {
            const postList = await Post.find({}).limit(8);
            return postList;
        } catch (err) {
            console.log(err);
            err.status = 500;
            throw err;
        }
    };

    loadPost = async (id) => {
        try {
            const postList = await Post.find({
                _id: { $gt: id },
            }).limit(8);
            return postList;
        } catch (err) {
            console.log(err);
            err.status = 500;
            throw err;
        }
    };

    createPost = async (nickname, content) => {
        try {
            await Post.create({ nickname, content });

            return;
        } catch (error) {
            error.status = 500;
            throw error;
        }
    };
    getPost = async (postId) => {
        try {
            const readMe = await Post.findById(postId);
            return readMe;
        } catch (error) {
            error.status = 500;
            throw error;
        }
    };
}

module.exports = PostRepository;
