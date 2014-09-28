var window = {
    requestAnimationFrame: function(cb){
        cb();
    },
    setTimeout: function(cb, ms){
        global.setTimeout(cb, ms);
    }
};

module.exports = window;