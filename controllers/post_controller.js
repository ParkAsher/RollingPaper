const PostService = require('../services/post_service');

class PostController {
    postService = new PostService();

    loadPost = async (req, res) => {
        try {
            // 프론트에서 현재 나타나있는 게시글의 마지막 놈의 _id 값을 body
            // 그거를 repository 까지 넘겨서
            const { id, type } = req.body;

            // 메인페이지 첫 로딩 (호출시)
            if (type === 'init') {
                const postList = await this.postService.loadPostInit();
                return res.status(200).send({ postList });
            }

            const postList = await this.postService.loadPost(id, type);
            return res.status(200).send({ postList });
        } catch (err) {
            res.status(err.status).send(err.message);
        }
    };

    createPost = async (req, res) => {
        try {
            const { nickname, content } = req.body;

            if (nickname === undefined) {
                res.status(412).send({ message: '닉네임을 작성해 주세요' });
            } else if (content === undefined) {
                res.status(412).send({ message: '내용을 작성해 주세요' });
            }

            await this.postService.createPost(nickname, content);

            res.status(201).send({ message: '롤링페이퍼 작성 완료' });
        } catch (error) {
            res.status(400).send({ message: '롤링페이퍼 작성에 실패하였습니다.' });
        }
    };

    // 게시글 상세조회
    getPost = async (req, res) => {
        try {
            const { postId } = req.params;
            const currentPost = await this.postService.getPost(postId);
            if (!currentPost) {
                return res.status(400).json({ message: ' 게시글 조회에 실패하였습니다' });
            }
            return res.status(200).json({ currentPost });
        } catch (error) {
            res.status(500).json({ message: error.message });
        }
    };
}

module.exports = PostController;
