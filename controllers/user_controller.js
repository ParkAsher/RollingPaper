const jwt = require('jsonwebtoken');

/* Custom Error */
const { PasswordConfirmError, NotInvalidIdPassword } = require('../lib/CustomError');

// service
const UserService = require('../services/user_service.js');

class UserController {
    userService = new UserService();

    login = async (req, res) => {
        try {
            const { id, password } = req.body;

            if (!id || !password) {
                const error = new NotInvalidIdPassword();
                throw error;
            }

            // 입력받은 id에 해당하는 회원을 검색해서 정보를 들고온다.
            const user = await this.userService.findUser(id);

            if (password !== user.password) {
                const error = new PasswordConfirmError();
                throw error;
            }

            // 토큰 발급
            const accessToken = jwt.sign({ id: user.id }, 'RollingPaper', { expiresIn: '1d' });
            res.cookie('accessToken', accessToken);

            return res.status(200).json({ success: true });
        } catch (error) {
            return res.status(error.status).json({ message: error.message });
        }
    };
}

module.exports = UserController;
