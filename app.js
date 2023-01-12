const express = require('express');
const cookieParser = require('cookie-parser');

const dotenv = require('dotenv');
dotenv.config();

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

/* views */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.listen(process.env.PORT, () => {
    console.log('5000포트에서 실행');
});
