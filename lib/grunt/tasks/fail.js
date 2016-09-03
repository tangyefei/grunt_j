var colors = require('colors');

module.exports = function(e) {
    console.log("Error:".red + e)
    process.exit(1);
}