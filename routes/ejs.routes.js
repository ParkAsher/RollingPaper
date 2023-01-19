const express = require('express');
const router = express.Router();

// 메인페이지
router.get('/', (req, res) => {
    res.render('index.ejs', { components: 'main' });
});

// 로그인페이지
router.get('/login', (req, res) => {
    res.render('index.ejs', { components: 'login' });
});

module.exports = router;
