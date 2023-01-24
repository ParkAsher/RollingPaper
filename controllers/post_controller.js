/* Custom Error */
const {
    NotInvalidType,
    NotInvalidNicknameContent,
    NicknameLengthError,
    NotAuthorizedError,
    NotInvalidPostId,
} = require('../lib/CustomError');

/* Service */
const PostService = require('../services/post_service');

class PostController {
    postService = new PostService();

    getPosts = async (req, res) => {
        try {
            // 프론트에서 현재 나타나있는 게시글의 마지막 놈의 _id 값을 body
            // 그거를 repository 까지 넘겨서
            const id = req.query.id;
            const type = req.query.type;

            if (!type) {
                const error = new NotInvalidType();
                throw error;
            }

            // 메인페이지 첫 로딩 (호출시)
            if (type === 'init') {
                const postList = await this.postService.getPostsInit();
                return res.status(200).json({ postList });
            }

            const postList = await this.postService.getPosts(id, type);

            return res.status(200).json({ postList });
        } catch (error) {
            return res.status(error.status).json({ message: error.message });
        }
    };

    createPost = async (req, res) => {
        try {
            const { nickname, content } = req.body;

            if (!nickname || !content) {
                const error = new NotInvalidNicknameContent();
                throw error;
            }

            if (nickname.length > 10) {
                let error = new NicknameLengthError();
                throw error;
            }

            await this.postService.createPost(nickname, content);

            return res.status(201).send({ message: '롤링페이퍼 작성 완료' });
        } catch (error) {
            return res.status(error.status).send({ message: error.message });
        }
    };

    // 게시글 상세조회
    getPost = async (req, res) => {
        try {
            const { postId } = req.params;

            if (!postId) {
                const error = new NotInvalidPostId();
                throw error;
            }

            if (!res.locals.user) {
                const error = new NotAuthorizedError();
                throw error;
            }

            const post = await this.postService.getPost(postId);

            return res.status(200).json({ post });
        } catch (error) {
            res.status(error.status).json({ message: error.message });
        }
    };
}

module.exports = PostController;
