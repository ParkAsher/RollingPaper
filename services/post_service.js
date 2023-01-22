const PostRepository = require('../repositories/post_repository');

class PostService {
    postRepository = new PostRepository();

    // loadPostInit

    loadPostInit = async () => {
        try {
            const postList = await this.postRepository.loadPostInit();

            if (postList.length < 1) {
                let error = new Error('작성된 글이 없습니다.');
                error.status = 404;
                throw error;
            }
            return postList;
        } catch (err) {
            throw err;
        }
    };

    loadPost = async (id) => {
        try {
            const postList = await this.postRepository.loadPost(id);

            if (postList.length < 1) {
                let error = new Error('작성된 글이 없습니다.');
                error.status = 404;
                throw error;
            }
            return postList;
        } catch (err) {
            throw err;
        }
    };

    createPost = async (nickname, content) => {
        try {
            await this.postRepository.createPost(nickname, content);

            if (nickname.length > 10) {
                let error = new Error('닉네임은 10글자를 넘길 수 없습니다.');
                error.status = 412;
                throw error;
            }
            return;
        } catch (error) {
            throw error;
        }
    };

    getPost = async (postId) => {
        try {
            const readMe = await this.postRepository.getPost(postId);
            return readMe;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = PostService;
