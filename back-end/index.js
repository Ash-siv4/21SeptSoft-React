const express = require('express');
const bodyParser = require('body-parser');

// App instantiation
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes installed and used
const routes = require('./Routes/Films');
app.use(routes);

// // Hello Path for testing
// app.use("/hello", (req,res,next) => {
//     res.send("hi");
// })

// Communicating with port and checking connection
const server = app.listen(3005, () => {
    console.log(`Server has successfully started on port number: ${server.address().port}`);
});

// Exporting app
module.exports = server