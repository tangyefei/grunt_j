var fs = require("fs");
var path = require("path");
var fail = require("./tasks/fail")

var exports = module.exports = function(name) {
    var splits = name.split(":");
    var task = exports[splits[0]]
    task || fail("Task " + splits[0] + " not defined");
    var subTask = task.tasks[splits[1] || "_default"];
    subTask || fail("Task " + splits[1] + " not defined");

    subTask.call({
        task: function(name) {
            if(/^\:/.test(name)) {
                name = splits[0] + name;
            }
            exports(name);
            return this;
        }
    })
    return this;
}

fs.readdirSync(path.join(__dirname, "tasks")).forEach(function(filepath){
    var name = filepath.replace(/\.js$/,"");
    // console.log('filepath:' + filepath)
    // console.log('./tasks/name:' + ('./tasks/' + name))
    exports[name] = require('./tasks/' + name)
})