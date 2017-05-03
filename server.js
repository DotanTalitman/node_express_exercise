
var express = require("express");
var app= express();

//var router= require("./routes/index"); // without middlewars
var router= require("./routes/index2");  // with  middlewars

app.use(router);

app.listen(3000);


