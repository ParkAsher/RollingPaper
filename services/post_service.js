const PostRepository = require('../repositories/post_repository');

class PostService {
    postRepository = new PostRepository();

    createPost = async (nickname, content) => {
        await this.postRepository.createPost(nickname, content);

        return
    }
}

module.exports = PostService;