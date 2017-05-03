var express = require("express");
var route = express.Router();
var path = require("path");
var root = process.cwd();
var fs = require("fs");
var dbFile = "DB.text";
var dbPath=path.join(root, dbFile);


route.get("/", function (req, res) {
    res.sendFile(path.join(root, "index.html"))
})


route.get("/person/", function (req, res) {
      res.sendFile(path.join(root, "index.html"))
})

route.get("/person/:id", function (req, res) {
    var num = req.params.id;
    var data;
    if (fs.existsSync(path.join(root, dbFile))) {
        data = getFromFile();
        if (data) insertToFile(Number(data) + Number(num));
    } else {
        insertToFile(num)
    }

     res.sendFile(path.join(root, "index.html"));
})

route.get("/sum",function(req,res){
    res.json(getFromFile().toString());
})


function getFromFile() {
    var data = fs.readFileSync(dbPath);
    insertToFile("");
 
    return data;
}

function insertToFile(num) {
    fs.writeFile(dbPath,num)
}



module.exports = route;