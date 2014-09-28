var should = require('should');
var sinon = require('sinon');

var Camera = require('test/mocks/Camera.js');
var Scene = require('test/mocks/Scene.js');
var Renderer = require('test/mocks/Renderer.js');
global.window = require('test/mocks/window.js');


var RenderMachine = require('test/coverage/RenderMachine.js');

describe('RenderMachine', function(){
    
    



    describe('new', function(){
        
        it("should create an instance of RenderMachine", function(){
            var rm = new RenderMachine();

            rm.should.be.an.instanceOf(RenderMachine);
        });

        it("should take a configuration hash", function(){
            var cam = new Camera();
            var scene = new Scene();
            var renderer = new Renderer();
            var provisionedRm = new RenderMachine({camera: cam, scene: scene, renderer: renderer});

            provisionedRm.camera.should.be.exactly(cam);
            provisionedRm.scene.should.be.exactly(scene);
            provisionedRm.renderer.should.be.exactly(renderer);
        });

        it("should set the fps to 60 by default", function(){
            var rm = new RenderMachine();

            rm.fps.should.be.exactly(60);
        });

    });

    describe('#render', function(){
        var clock;
        var cam;
        var scene;
        var renderer;

        beforeEach(function(){
            clock = sinon.useFakeTimers();
            cam = new Camera();
            scene = new Scene();
            renderer = new Renderer();
        });

        afterEach(function(){
            clock.restore();
        });

        it("should set the running property", function(){
            var rm = new RenderMachine({camera: cam, scene: scene, renderer: renderer});

            rm.render();

            rm.running.should.be.ok;
        });

        it("should render at the interval set by fps", function(){
            var rm = new RenderMachine({camera: cam, scene: scene, renderer: renderer, fps: 2});
            var spy = sinon.spy();
            
            rm.on('render', spy);
            rm.render();
            clock.tick(999);

            spy.callCount.should.equal(2);

        });

    });

    describe('#on', function(){
        
        var clock;
        var cam;
        var scene;
        var renderer;

        beforeEach(function(){
            clock = sinon.useFakeTimers();
            cam = new Camera();
            scene = new Scene();
            renderer = new Renderer();
        });

        afterEach(function(){
            clock.restore();
        });

        it("should set callbacks for the firstRender, beforeRender, render, and afterRender events", function(){
            var rm = new RenderMachine({camera: cam, scene: scene, renderer: renderer});
            var frspy = sinon.spy();
            var brspy = sinon.spy();
            var rspy = sinon.spy();
            var arspy = sinon.spy();

            rm.on('firstRender', frspy);
            rm.on('beforeRender', brspy);
            rm.on('render', rspy);
            rm.on('afterRender', arspy);

            rm.render();
            clock.tick(999);

            frspy.callCount.should.equal(1);
            brspy.callCount.should.equal(60);
            rspy.callCount.should.equal(60);
            arspy.callCount.should.equal(60);
        });

        it("should be able to register multiple callbacks for a single event", function(){
            var rm = new RenderMachine({camera: cam, scene: scene, renderer: renderer});
            var cb1 = sinon.spy();
            var cb2 = sinon.spy();

            rm.on('firstRender', cb1);
            rm.on('firstRender', cb2);

            rm.render();
            clock.tick(999);

            cb1.callCount.should.equal(1);
            cb2.callCount.should.equal(1);
        });

    });

    describe('#off', function(){
        var clock;
        var cam;
        var scene;
        var renderer;

        beforeEach(function(){
            clock = sinon.useFakeTimers();
            cam = new Camera();
            scene = new Scene();
            renderer = new Renderer();
        });

        afterEach(function(){
            clock.restore();
        });

        it("should unset the callback by event name and function object", function(){
            var rm = new RenderMachine({camera: cam, scene: scene, renderer: renderer});
            var spy = sinon.spy();
            var count;

            rm.on('render', spy);
            rm.render();
            clock.tick(999);
            rm.off('render', spy);
            count = spy.callCount;
            clock.tick(999);
            spy.callCount.should.equal(count);
        });

    });


});