/* Custom Error */
const {
    PostNotFound,
    PostsNotExist,
    PrevPageNotExistError,
    NextPageNotExistError,
} = require('../lib/CustomError');

/* Repository */
const PostRepository = require('../repositories/post_repository');

class PostService {
    postRepository = new PostRepository();

    getPostsInit = async () => {
        try {
            const postList = await this.postRepository.getPostsInit();

            if (postList.length < 1) {
                const error = PostsNotExist();
                throw error;
            }

            return postList;
        } catch (error) {
            throw error;
        }
    };

    getPosts = async (id, type) => {
        try {
            const postList = await this.postRepository.getPosts(id, type);

            if (postList.length < 1) {
                if (type === 'next') {
                    const error = new NextPageNotExistError();
                    throw error;
                } else {
                    const error = new PrevPageNotExistError();
                    throw error;
                }
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
        } catch (error) {
            throw error;
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
            const post = await this.postRepository.getPost(postId);

            if (!post) {
                const error = new PostNotFound();
                throw error;
            }
            return post;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = PostService;
