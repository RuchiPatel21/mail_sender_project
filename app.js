const express = require('express')
const app = express()

var bodyparser =require('body-parser')

app.use(bodyparser.urlencoded({extended: false}));
app.use(bodyparser.json());

require("./router")(app);



app.listen(9998, function(){
    console.log("Server is running on port 9998")
});

