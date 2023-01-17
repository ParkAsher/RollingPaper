const PostService = require('../services/post_service');

class PostController {
    postService = new PostService();

    createPost = async (req, res) => {
        try {
        const {nickname, content} = req.body;

        if (nickname === undefined) {
            res.status(412).send({"message": "닉네임을 작성해 주세요"});
        } else if (content === undefined) {
            res.status(412).send({"message": "내용을 작성해 주세요"});
        }

        await this.postService.createPost(nickname, content);

        res.status(201).send({"message": "롤링페이퍼 작성 완료"});
        } catch (error) {
            res.status(400).send({"message": "롤링페이퍼 작성에 실패하였습니다."});
        }
    }
}

module.exports = PostController;