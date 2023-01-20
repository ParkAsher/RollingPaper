const jwt = require('jsonwebtoken');

// model
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
            const error = new Error('유저가 존재하지 않습니다.');
            error.status = 400;
            throw error;
        }

        res.locals.user = user;

        next();
    } catch (error) {
        res.clearCookie('accessToken');
        return res.status(error.status).json({ message: error.message });
    }
};
