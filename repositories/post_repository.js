const Post = require("../schemas/post.js");

class PostRepository {
  loadPost = async () => {
    try {
      const allPosts = await Post.find({});
      return allPosts;
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
}

module.exports = PostRepository;
