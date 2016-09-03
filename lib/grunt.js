var task = require("./grunt/task")
var cli = require("./grunt/cli")

// Object.keys(tasks).forEach(function(key) {
//     var task = tasks[key];
//     console.log(key + ' --> ' + tasks[key].info);
// })

var tasks = cli.tasks.length ? cli.tasks : ["default"];
tasks.forEach(task);

// console.log(cli)