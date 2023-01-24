const express = require('express');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');

/* .env */
dotenv.config();

/* MongoDB Connect */
const connect = require('./schemas/index');
connect();

const app = express();

/* Routes */
const apiRouter = require('./routes');
const ejsRouter = require('./routes/ejs.routes');

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(ejsRouter);
app.use('/api', apiRouter);

/* views */
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/views'));

app.listen(process.env.PORT, () => {
    console.log('5000포트에서 실행');
});
