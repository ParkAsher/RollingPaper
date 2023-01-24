const jwt = require('jsonwebtoken');

/* Custom Error */
const { UserNotFound } = require('../lib/CustomError');

/* Schema */
const User = require('../schemas/user');

module.exports = async (req, res, next) => {
    try {
        // 쿠키에서 accessToken 들고오기
        const { accessToken } = req.cookies;

        // 토큰이 존재하지 않는다면?
        if (!accessToken) {
            return next();
        }

        const { id } = jwt.verify(accessToken, 'RollingPaper');

        const user = await User.findOne({ id }).exec();

        // id에 해당하는 회원이 존재하지 않는 경우
        if (!user) {
            const error = new UserNotFound();
            throw error;
        }

        res.locals.user = user;

        next();
    } catch (error) {
        res.clearCookie('accessToken');
        return res.status(error.status).json({ message: error.message });
    }
};
