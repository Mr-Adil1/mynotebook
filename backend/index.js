const connectDB = require("./db");
const express = require("express");
/* Creating an instance of the express application. */
const app = express();
const port = 4000;
app.use(express.json())
/* This is a route handler. It is listening for a request to the root route (/) and then sending back a
response of 'Hello World!'. */

//Available routes
app.use('/api/auth',require('./routes/auth'));
app.use('/api/notes',require('./routes/notes'));

app.listen(port, () => {
  console.log(`Example app listening on port ( http://localhost:${port} )`);
});
connectDB();
