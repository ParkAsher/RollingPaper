const PostRepository = require('../repositories/post_repository');

class PostService {
    postRepository = new PostRepository();

    getPostsInit = async () => {
        try {
            const postList = await this.postRepository.getPostsInit();

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

    getPosts = async (id, type) => {
        try {
            const postList = await this.postRepository.loadPost(id, type);

            if (postList.length < 1) {
                let error = new Error();
                if (type === 'next') {
                    error.message = '마지막 페이지입니다.';
                } else {
                    error.message = '첫 페이지입니다.';
                }
                error.status = 404;
                throw error;
            }

            // 들고 온 리스트 오름차순
            postList.sort((a, b) => {
                if (a.id < b.id) {
                    return -1;
                }
                if (a.id > b.id) {
                    return 1;
                }
                return 0;
            });

            return postList;
        } catch (err) {
            throw err;
        }
    };

    createPost = async (nickname, content) => {
        try {
            await this.postRepository.createPost(nickname, content);

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
