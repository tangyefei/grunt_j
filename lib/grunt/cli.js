var nopt = require('nopt');

var options = {
    help: {
        short: "h",
        type: Boolean
    },
    debug: {
        short: "d",
        type: Boolean
    }
}

var aliaes = {};
var known = {};
Object.keys(options).forEach(function (key) {
    var option = options[key];
    known[key] = option.type;
    aliaes[option.short] = "--" + key;
})

var parsed = nopt(known,aliaes,process.argv,2)

exports.tasks = parsed.argv.remain;
exports.options = parsed;

delete parsed.argv;

/*
{
    "argv": {
        remain: []
        orginals: []
        cooked: []
    }
    "help": true,
    "debug" false
}
*/