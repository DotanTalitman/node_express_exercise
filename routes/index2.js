var express = require("express");
var route = express.Router();
var root = process.cwd();
var path= require("path")
var indexHtml=path.join(root, "index.html");
var insertNum=require(path.join(root,"middleware","insertNum"));
var getAndDelete= require(path.join(root,"middleware","getAndDelete"));

route.get("/", function (req, res) {
    res.sendFile(indexHtml)
})
route.get("/person/", function (req, res) {
      res.sendFile(indexHtml)
})
route.use("/person/:id",insertNum);
route.get("/person/:id", function (req, res) {
     res.sendFile(indexHtml);
})
route.get("/sum",getAndDelete,function(req,res){
    res.json(req.myData.toString());
})

module.exports = route;