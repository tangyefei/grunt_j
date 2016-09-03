exports.info = "min task"
exports.tasks = {
    _default: function() {
        console.log('run min task')
        this.task(":a").task(":b");
    },
    a: function() {
        console.log('run min:a task')
    },
    b: function() {
        console.log('run min:b task')
    }
}