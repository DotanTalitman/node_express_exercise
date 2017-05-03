
var fs= require("fs")
var path =require("path");
var root = process.cwd();
var dbFile = "DB.text";
var dbPath=path.join(root, dbFile);

function getAndDelete(req, res, next) {
      var data = fs.readFileSync(dbPath);
    fs.writeFile(dbPath,"")
    req.myData=data;
    next();
}





module.exports=getAndDelete;