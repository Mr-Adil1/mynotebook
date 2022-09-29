
const mongoos = require('mongoose');
const uri = 'mongodb://localhost:27017/mynotebook';

const connectDB = ()=>{
    mongoos.connect(uri)
    .then((db)=> {
      console.log('connected to the database');
})
    .catch((err)=>{
        console.log(`some err: ${err}`);
    });
}

module.exports =connectDB;

// M8rCJVEA4iYhgK8g