/* Custom Error */
class NotInvalidIdPassword extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotInvalidIdPassword';
        this.message = '아이디 또는 패스워드를 입력해주세요.';
    }
    status = 400;
}

class PasswordConfirmError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PasswordConfirmError';
        this.message = '비밀번호가 일치하지 않습니다.';
    }
    status = 400;
}

class UserNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserNotFound';
        this.message = '회원이 존재하지 않습니다.';
    }
    status = 404;
}

module.exports = {
    NotInvalidIdPassword,
    PasswordConfirmError,
    UserNotFound,
};
