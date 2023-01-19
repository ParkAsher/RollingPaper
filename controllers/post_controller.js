const PostService = require("../services/post_service");

class PostController {
  postService = new PostService();

  loadPost = async (req, res) => {
    try {
      const allPosts = await this.postService.loadPost();
      return res.status(200).send({ allPosts });
    } catch (err) {
      res.status(err.status).send(err.message);
    }
  };

  createPost = async (req, res) => {
    try {
      const { nickname, content } = req.body;

      if (nickname === undefined) {
        let error = new Error("닉네임을 작성해 주세요");
        error.status = 412;
        throw error;
      } else if (content === undefined) {
        let error = new Error("내용을 작성해 주세요");
        error.status = 412;
        throw error;
      }

      await this.postService.createPost(nickname, content);

      res.status(201).send({ message: "롤링페이퍼 작성 완료" });
    } catch (error) {
      res.status(error.status).send(error.message);
    }
  };
}

module.exports = PostController;
