var extend = require('node.extend');

var RenderMachine = function(params){
    this.setValues(params);
    this.fps = this.fps || 60;
    this.running = 0;
};

RenderMachine.prototype.setValues = function(options){
    extend(true, this, options);
};

RenderMachine.prototype.render = function(){
    var that = this;

    if (!that.running){
        that.running = true;
        that.trigger('firstRender');
    };

    that.trigger('beforeRender');

    window.setTimeout(function(){
        window.requestAnimationFrame(that.render.bind(that));
        }, (1000 / that.fps));

    that.trigger('render');
    that.renderer.render(that.scene, that.camera);

    that.trigger('afterRender');
};


RenderMachine.prototype.events = {
    'firstRender':[],
    'beforeRender':[],
    'afterRender':[],
    'render':[]
};

RenderMachine.prototype.on = function(ename, cb, that){
    var func = (that) ? cb.bind(that) : cb;
    this.events[ename].push([func, that]);
};

RenderMachine.prototype.off = function(ename, cb){
    var index = this.events[ename].indexOf(cb);
    if(index){
        this.events[ename].splice(index, 1);
    }
};

RenderMachine.prototype.trigger = function(ename, params){
    if(this.events[ename].length){
        this.events[ename].forEach(function(arr){
            arr[0].call(arr[1], params);
        });
    }
};

module.exports = RenderMachine;