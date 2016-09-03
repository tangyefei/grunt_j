module.exports = {
    info: "min task",
    task: function() {
        console.log('run min task')
        this.task(":a").task(":b");
    },
    subTask: {
        a: function() {
            console.log('run min:a task')
        },
        b: function() {
            console.log('run min:b task')
        }
    }
}
