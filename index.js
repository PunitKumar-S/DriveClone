const express = require('express');
const userRouter = require('./routes/user.routes')

const app = express();
app.set('view engine', 'ejs');

app.use('/user', userRouter);

// JWT - Json Web Token

app.listen(3000, ()=>{
    console.log('Server is running on 3000')
})
