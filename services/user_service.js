const UserRepository = require('../repositories/user_repository');

class UserService {
    userRepository = new UserRepository();

    findUser = async (id) => {
        try {
            const user = await this.userRepository.findUser(id);

            // 없다면?
            if (!user) {
                const error = new Error('회원이 존재하지 않습니다.');
                error.status = 400;
                throw error;
            }

            return user;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = UserService;
