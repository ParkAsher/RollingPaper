const Post = require('../schemas/post.js');

class PostRepository {
    getPostsInit = async () => {
        try {
            const postList = await Post.find({}).limit(7);
            return postList;
        } catch (error) {
            error.status = 500;
            throw error;
        }
    };

    getPosts = async (id, type) => {
        try {
            if (type === 'next') {
                const postList = await Post.find({
                    _id: { $gt: id },
                }).limit(7);

                return postList;
            } else {
                const postList = await Post.find({
                    _id: { $lt: id },
                })
                    .sort({
                        _id: -1,
                    })
                    .limit(7);

                return postList;
            }
        } catch (error) {
            error.status = 500;
            throw error;
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
            const post = await Post.findById(postId);

            return post;
        } catch (error) {
            error.status = 500;
            throw error;
        }
    };
}

module.exports = PostRepository;
