if (typeof _$jscoverage === 'undefined') _$jscoverage = {};
if (typeof _$jscoverage['lib/RenderMachine.js'] === 'undefined'){_$jscoverage['lib/RenderMachine.js']=[];
_$jscoverage['lib/RenderMachine.js'].source=['var extend = require(\'node.extend\');',
'',
'var RenderMachine = function(params){',
'    this.setValues(params);',
'    this.fps = this.fps || 60;',
'    this.running = 0;',
'};',
'',
'RenderMachine.prototype.setValues = function(options){',
'    extend(true, this, options);',
'};',
'',
'RenderMachine.prototype.render = function(){',
'    var that = this;',
'',
'    if (!that.running){',
'        that.running = true;',
'        that.trigger(\'firstRender\');',
'    };',
'',
'    that.trigger(\'beforeRender\');',
'',
'    window.setTimeout(function(){',
'        window.requestAnimationFrame(that.render.bind(that));',
'        }, (1000 / that.fps));',
'',
'    that.trigger(\'render\');',
'    that.renderer.render(that.scene, that.camera);',
'',
'    that.trigger(\'afterRender\');',
'};',
'',
'',
'RenderMachine.prototype.events = {',
'    \'firstRender\':[],',
'    \'beforeRender\':[],',
'    \'afterRender\':[],',
'    \'render\':[]',
'};',
'',
'RenderMachine.prototype.on = function(ename, cb, that){',
'    var func = (that) ? cb.bind(that) : cb;',
'    this.events[ename].push([func, that]);',
'};',
'',
'RenderMachine.prototype.off = function(ename, cb){',
'    var index = this.events[ename].indexOf(cb);',
'    if(index){',
'        this.events[ename].splice(index, 1);',
'    }',
'};',
'',
'RenderMachine.prototype.trigger = function(ename, params){',
'    if(this.events[ename].length){',
'        this.events[ename].forEach(function(arr){',
'            arr[0].call(arr[1], params);',
'        });',
'    }',
'};',
'',
'module.exports = RenderMachine;'];
_$jscoverage['lib/RenderMachine.js'][28]=0;
_$jscoverage['lib/RenderMachine.js'][1]=0;
_$jscoverage['lib/RenderMachine.js'][30]=0;
_$jscoverage['lib/RenderMachine.js'][5]=0;
_$jscoverage['lib/RenderMachine.js'][3]=0;
_$jscoverage['lib/RenderMachine.js'][4]=0;
_$jscoverage['lib/RenderMachine.js'][34]=0;
_$jscoverage['lib/RenderMachine.js'][9]=0;
_$jscoverage['lib/RenderMachine.js'][6]=0;
_$jscoverage['lib/RenderMachine.js'][43]=0;
_$jscoverage['lib/RenderMachine.js'][18]=0;
_$jscoverage['lib/RenderMachine.js'][16]=0;
_$jscoverage['lib/RenderMachine.js'][14]=0;
_$jscoverage['lib/RenderMachine.js'][13]=0;
_$jscoverage['lib/RenderMachine.js'][17]=0;
_$jscoverage['lib/RenderMachine.js'][10]=0;
_$jscoverage['lib/RenderMachine.js'][49]=0;
_$jscoverage['lib/RenderMachine.js'][27]=0;
_$jscoverage['lib/RenderMachine.js'][24]=0;
_$jscoverage['lib/RenderMachine.js'][23]=0;
_$jscoverage['lib/RenderMachine.js'][21]=0;
_$jscoverage['lib/RenderMachine.js'][41]=0;
_$jscoverage['lib/RenderMachine.js'][42]=0;
_$jscoverage['lib/RenderMachine.js'][46]=0;
_$jscoverage['lib/RenderMachine.js'][47]=0;
_$jscoverage['lib/RenderMachine.js'][48]=0;
_$jscoverage['lib/RenderMachine.js'][53]=0;
_$jscoverage['lib/RenderMachine.js'][54]=0;
_$jscoverage['lib/RenderMachine.js'][55]=0;
_$jscoverage['lib/RenderMachine.js'][56]=0;
_$jscoverage['lib/RenderMachine.js'][61]=0;
}_$jscoverage['lib/RenderMachine.js'][1]++;
var extend = require('node.extend');

_$jscoverage['lib/RenderMachine.js'][3]++;
var RenderMachine = function(params){
    _$jscoverage['lib/RenderMachine.js'][4]++;
this.setValues(params);
    _$jscoverage['lib/RenderMachine.js'][5]++;
this.fps = this.fps || 60;
    _$jscoverage['lib/RenderMachine.js'][6]++;
this.running = 0;
};

_$jscoverage['lib/RenderMachine.js'][9]++;
RenderMachine.prototype.setValues = function(options){
    _$jscoverage['lib/RenderMachine.js'][10]++;
extend(true, this, options);
};

_$jscoverage['lib/RenderMachine.js'][13]++;
RenderMachine.prototype.render = function(){
    _$jscoverage['lib/RenderMachine.js'][14]++;
var that = this;

    _$jscoverage['lib/RenderMachine.js'][16]++;
if (!that.running){
        _$jscoverage['lib/RenderMachine.js'][17]++;
that.running = true;
        _$jscoverage['lib/RenderMachine.js'][18]++;
that.trigger('firstRender');
    };

    _$jscoverage['lib/RenderMachine.js'][21]++;
that.trigger('beforeRender');

    _$jscoverage['lib/RenderMachine.js'][23]++;
window.setTimeout(function(){
        _$jscoverage['lib/RenderMachine.js'][24]++;
window.requestAnimationFrame(that.render.bind(that));
        }, (1000 / that.fps));

    _$jscoverage['lib/RenderMachine.js'][27]++;
that.trigger('render');
    _$jscoverage['lib/RenderMachine.js'][28]++;
that.renderer.render(that.scene, that.camera);

    _$jscoverage['lib/RenderMachine.js'][30]++;
that.trigger('afterRender');
};


_$jscoverage['lib/RenderMachine.js'][34]++;
RenderMachine.prototype.events = {
    'firstRender':[],
    'beforeRender':[],
    'afterRender':[],
    'render':[]
};

_$jscoverage['lib/RenderMachine.js'][41]++;
RenderMachine.prototype.on = function(ename, cb, that){
    _$jscoverage['lib/RenderMachine.js'][42]++;
var func = (that) ? cb.bind(that) : cb;
    _$jscoverage['lib/RenderMachine.js'][43]++;
this.events[ename].push([func, that]);
};

_$jscoverage['lib/RenderMachine.js'][46]++;
RenderMachine.prototype.off = function(ename, cb){
    _$jscoverage['lib/RenderMachine.js'][47]++;
var index = this.events[ename].indexOf(cb);
    _$jscoverage['lib/RenderMachine.js'][48]++;
if(index){
        _$jscoverage['lib/RenderMachine.js'][49]++;
this.events[ename].splice(index, 1);
    }
};

_$jscoverage['lib/RenderMachine.js'][53]++;
RenderMachine.prototype.trigger = function(ename, params){
    _$jscoverage['lib/RenderMachine.js'][54]++;
if(this.events[ename].length){
        _$jscoverage['lib/RenderMachine.js'][55]++;
this.events[ename].forEach(function(arr){
            _$jscoverage['lib/RenderMachine.js'][56]++;
arr[0].call(arr[1], params);
        });
    }
};

_$jscoverage['lib/RenderMachine.js'][61]++;
module.exports = RenderMachine;