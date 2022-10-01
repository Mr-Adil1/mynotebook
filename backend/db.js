const mongoos = require("mongoose");
/* The connection string to the database. */
const uri = "mongodb+srv://mynotebook:p9XuViM4Ko1TFTl7@cluster0.zexqyvn.mongodb.net/mynotebook";

const connectDB = () => {
  mongoos
    .connect(uri)
    .then((db) => {
      console.log("connected to the database");
    })
    .catch((err) => {
      console.log(`some err: ${err}`);
    });
};

module.exports = connectDB;

// M8rCJVEA4iYhgK8g
