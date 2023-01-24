/* Custom Error */
class NotInvalidIdPassword extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotInvalidIdPassword';
        this.message = '아이디 또는 패스워드를 입력해주세요.';
    }
    status = 412;
}

class PasswordConfirmError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PasswordConfirmError';
        this.message = '비밀번호가 일치하지 않습니다.';
    }
    status = 412;
}

class UserNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = 'UserNotFound';
        this.message = '회원이 존재하지 않습니다.';
    }
    status = 404;
}

class NotInvalidType extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotInvalidType';
        this.message = '유효하지 않은 데이터입니다.';
    }
    status = 412;
}

class NotInvalidNicknameContent extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotInvalidNicknameContent';
        this.message = '빈칸을 입력해주세요.';
    }
    status = 412;
}

class NicknameLengthError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NicknameLengthError';
        this.message = '닉네임은 10글자를 넘길 수 없습니다.';
    }
    status = 412;
}

class NotAuthorizedError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotAuthorizedError';
        this.message = '게시글 조회 권한이 없습니다.';
    }
    status = 401;
}

class NotInvalidPostId extends Error {
    constructor(message) {
        super(message);
        this.name = 'NotInvalidPostId';
        this.message = '유효하지 않은 게시글 번호입니다.';
    }
    status = 412;
}

class PostNotFound extends Error {
    constructor(message) {
        super(message);
        this.name = 'PostNotFound';
        this.message = '게시글 조회에 실패하였습니다.';
    }
    status = 404;
}

class PostsNotExist extends Error {
    constructor(message) {
        super(message);
        this.name = 'PostsNotExist';
        this.message = '글이 존재하지 않습니다.';
    }
    status = 404;
}

class PrevPageNotExistError extends Error {
    constructor(message) {
        super(message);
        this.name = 'PrevPageNotExistError';
        this.message = '첫 페이지입니다.';
    }
    status = 404;
}

class NextPageNotExistError extends Error {
    constructor(message) {
        super(message);
        this.name = 'NextPageNotExistError';
        this.message = '마지막 페이지입니다.';
    }
    status = 404;
}

module.exports = {
    NotInvalidIdPassword,
    PasswordConfirmError,
    UserNotFound,
    NotInvalidType,
    NotInvalidNicknameContent,
    NicknameLengthError,
    NotAuthorizedError,
    NotInvalidPostId,
    PostNotFound,
    PostsNotExist,
    PrevPageNotExistError,
    NextPageNotExistError,
};
