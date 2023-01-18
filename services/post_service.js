const PostRepository = require("../repositories/post_repository");

class PostService {
    postRepository = new PostRepository();

    createPost = async (nickname, content) => {
        await this.postRepository.createPost(nickname, content);

        return;
    };
    getPost = async (req, res) => {
        const {readMe} = await this.postRepository.getPost();
        const readPost = readMe.map(({nickname, content}) => {
            return {
                nickname,
                content,
            };
        });
        return {readPost};
    };
}

module.exports = PostService;
