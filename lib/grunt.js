var tasks = require("./grunt/tasks")
var cli = require("./grunt/cli")

Object.keys(tasks).forEach(function(key) {
    var task = tasks[key];
    console.log(key + ' --> ' + tasks[key].info);
})

console.log(cli)