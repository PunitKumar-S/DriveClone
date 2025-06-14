const express = require('express');
const userRouter = require('./routes/user.routes')
const dotenv = require('dotenv');
const connectToDB = require('./config/db');
// 
const cookieParser = require('cookie-parser');
const indexRouter = require('./routes/index.routes');


dotenv.config();

connectToDB();

// middleware
const app = express();
app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended: true}))

app.set('view engine', 'ejs');

app.use('/user', userRouter);
app.use('/', indexRouter);


// JWT - Json Web Token

app.listen(3000, ()=>{
    console.log('Server is running on 3000')
})
