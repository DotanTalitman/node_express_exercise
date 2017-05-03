
var fs= require("fs")
var path =require("path");
var root = process.cwd();
var dbFile = "DB.text";
var dbPath=path.join(root, dbFile);

function insertNum(req, res, next) {
    var num = req.params.id;
    var data;
    if (fs.existsSync(path.join(root, dbFile))) {
        data = getFromFile();
        if (data) insertToFile(Number(data) + Number(num));
    } else {
        insertToFile(num)
    }

    next();
}

function getFromFile() {
    var data = fs.readFileSync(dbPath);
    insertToFile("");
 
    return data;
}

function insertToFile(num) {
    fs.writeFile(dbPath,num)
}

module.exports=insertNum;