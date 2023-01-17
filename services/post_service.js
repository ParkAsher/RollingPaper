const PostRepository = require('../repositories/post_repository');

class PostService {
    postRepository = new PostRepository();

    createPost = async (nickname, content) => {
        try {
            await this.postRepository.createPost(nickname, content);

            if(nickname.length > 10) {
                let error = new Error("닉네임은 10글자를 넘길 수 없습니다.");
                error.status = 412;
                throw error
            }

            return
        } catch (error) {
            throw error
        }

    }
}

module.exports = PostService;