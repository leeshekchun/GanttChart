const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
 
const port = 1337;
const app = express();
 
app.use(express.static(path.join(__dirname, "public")));
app.use(bodyParser.urlencoded({ extended: true }));

// add a dataProcessor route
app.all(/api/, function(req, res, next){
    console.log(`\n${req.method} ${req.url} --> ${JSON.stringify(req.body, '\t', 2)}`);
    res.status(200).end();
});
 
app.listen(port, () =>{
    console.log("Server is running on port "+port+"...");
});