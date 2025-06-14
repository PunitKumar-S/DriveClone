const mongoose = require('mongoose');

function connectToDB(){
    mongoose.connect(process.env.MONGO_URI).then(()=>{
        console.log('Connected to DB')
    }).catch((error)=>{
        console.log(error);
    })
}

module.exports = connectToDB;