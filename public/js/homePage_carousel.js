const fs = require("fs")
module.exports.func = function carousel(dir){
    const folders = fs.readdirSync(dir)
    const arr = []
    folders.forEach(folder => {
        if(fs.readdirSync(dir+"/"+folder).length != 0)
            arr.push("/site_data/uploads/"+folder+"/gamePoster.png")
    });
    return arr
}