const User = require('../schemas/user');

class UserRepository {
    findUser = async (id) => {
        try {
            const user = await User.findOne({ id }).exec();

            return user;
        } catch (error) {
            error.status = 400;
            throw error;
        }
    };
}

module.exports = UserRepository;
