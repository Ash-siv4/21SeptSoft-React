const express = require('express');
const bodyParser = require('body-parser');

// App instantiation
const app = express();

// Middleware
app.use(bodyParser.json());

// Routes installed and used
const routes = require('./Routes/Films');
app.use(routes);

app.use("/tuesday",(req,res,next)=>{
    res.send("Today is Tuesday!");
}
)

// Communicating with port and checking connection
const server = app.listen(3005, () => {
    console.log(`Server has successfully started on port: ${server.address().port}`);
});

// Exporting app
module.exports = server