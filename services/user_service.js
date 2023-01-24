/* Custom Error */
const { UserNotFound } = require('../lib/CustomError');

/* Repository */
const UserRepository = require('../repositories/user_repository');

class UserService {
    userRepository = new UserRepository();

    findUser = async (id) => {
        try {
            const user = await this.userRepository.findUser(id);

            // 없다면?
            if (!user) {
                const error = new UserNotFound();
                throw error;
            }

            return user;
        } catch (error) {
            throw error;
        }
    };
}

module.exports = UserService;
