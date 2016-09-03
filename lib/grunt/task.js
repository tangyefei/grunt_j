var fs = require("fs");
var path = require("path");
var fail = require("./fail")
var tasks = {};

module.exports = function task(name) {
    var splits = name.split(":");
    var obj = tasks[splits[0]]
    var fn;

    if(obj) {
        fn = splits[1] ? obj.subTask[splits[1]] : obj.task;
    }
    fn || fail("Task " + name + " not defined");

    fn.call({
        task: function(name) {
            task((name.charAt(0) == ':' ? splits[0] : "") + name);
            return this;
        }
    })
    return this;
}

function readTasks(_path) {
    if(!fs.existsSync(_path))return;

    fs.readdirSync(_path).forEach(function(filepath){
        var name = filepath.replace(/\.js$/,"");
        tasks[name] = require('./tasks/' + name)
    })
}

readTasks(path.join(__dirname, "tasks"));