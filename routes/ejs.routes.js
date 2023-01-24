const express = require('express');
const router = express.Router();

// middleware
const auth = require('../middleware/auth');

// 메인페이지
router.get('/', (req, res) => {
    // getPostCount - 전체 카운트 조회
    // 8개
    res.render('index.ejs', { components: 'main' });
});

// 로그인페이지
router.get('/login', auth, (req, res) => {
    // 로그인이 되어있다면?
    if (res.locals.user) {
        return res.redirect('/');
    }
    res.render('index.ejs', { components: 'login' });
});

module.exports = router;
