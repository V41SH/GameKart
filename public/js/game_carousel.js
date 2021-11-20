const fs = require("fs")
module.exports.func = function carousel(dir){
    const files = fs.readdirSync("public/"+dir)
    const folder = dir.substring(dir.lastIndexOf("\\")+1); 
    const arr = []
    files.forEach(file => {
        arr.push(folder+"/"+file)
    });
    return arr
}

