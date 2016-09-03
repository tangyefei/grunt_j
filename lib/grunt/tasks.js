var fs = require("fs");
var path = require("path");

var exports = module.exports = function(name) {
    exports[name].task.call(exports[name]);
}

fs.readdirSync(path.join(__dirname, "tasks")).forEach(function(filepath){
    var name = filepath.replace(/\.js$/,"");
    // console.log('filepath:' + filepath)
    // console.log('./tasks/name:' + ('./tasks/' + name))
    exports[name] = require('./tasks/' + name)
})