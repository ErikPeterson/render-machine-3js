[Three.js]: http://threejs.org 
[Broswerify]: http://browserify.org/

RenderMachine Three.js
======================

RenderMachine Three.js is an npm module that provides a convenient wrapper for handling rendering with [Three.js]. 

RenderMachine is built as a common JS module, and is intended to be used with [Browserify].

#Installation

Install from npm:

```shell
$ npm install render-machine-3js

```

Install from Github:

```shell
$ npm install git+https://github.com/ErikPeterson/render-machine-3js.git

```

#Tests

To run tests, clone the repo and run `npm install && npm test`

#Usage

*If you've never used [Three.js] before, you should probably run through one of the many introductory tutorials for the library before using RenderMachine.*

Three.js includes a suite of Renderer classes that handle the heavy lifting of turning your Three.js scenes into pixels in the browser. 

What the Three.js classes don't handle is hooking in to the `requestAnimationFrame` cycle of the browser and rendering frames.

If you've run through the basic Three.js tutorial before, you'll recognize this snippet of code:

```javascript

function render() {
	requestAnimationFrame(render);
	renderer.render(scene, camera);
}
render();

```

This is the most basic way of attaching to `requestAnimationFrame` and rendering a scene. However, this format gives you no way to control basic features of rendering like frame rate, and brittly depends on the presence of `renderer`, `camera`, and `scene` variables being in scope.

RenderMachine allows you to create an function that has swappable `camera`, `renderer`, and `scene` properties, and event hooks for different parts of the rendering cycle.

To use RenderMachine, you'll need to require [Three.js] as a commonjs module. The minified script provided on the [Three.js] site is UMD wrapped, so you can manually include the depency, or use the npm wrapper, [three](https://www.npmjs.org/package/three).


```javascript

var THREE = require('three');
var RenderMachine = require('render-machine-3js');

var rm = new RenderMachine();

```

Or, to provision your `RenderMachine` at instantiation, and start the render cycle:

```javacript

var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
var scene = new THREE.Scene();
var geometry = new THREE.BoxGeometry( 200, 200, 200 );
var material = new THREE.MeshBasicMaterial( { color: 0xff0000, wireframe: true } );

var mesh = new THREE.Mesh( geometry, material );
scene.add( mesh );

var renderer = new THREE.CanvasRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );

document.body.appendChild( renderer.domElement );

var rm = new RenderMachine({camera: camera, renderer: renderer, scene: scene});

rm.render();

```

Hook in to events:

```javascript

function firstRenderCallback(){
	console.log("Just executed first render!");
}

rm.on('firstRender', firstRenderCallback);

rm.render();

//=> "Just executed first render!";

```

Swap out a camera:

```javascript

var newCam = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );

rm.camera = newCam;

```

##Methods

### new RenderMachine([options])

A RenderMachine can be instantiated with or without a hash of options. The `camera`, `scene`, `renderer`, and `fps` properties can be set at instantiation.

- `camera` an instance of one of the [Three.js] `Camera` objects
- `scene` an instance of `THREE.Scene`
- `renderer` an instance of one of the [Three.js] `Renderer` objects
- `fps` sets the framerate for the render cycle. Defaults to 60. Values higher than 60 are probably not a good idea.

### \#render()

Begins the render cycle. This method calls the `render` method of the THREE.Render object registered to the `RenderMachine`, and recursively calls itself on a timer controlled by the `RenderMachine`'s `fps` property.

### \#on('eventname', fn, [this])

Register a callback function to one of the events emitted by the `RenderMachine`.

Available events:

- `firstRender` callbacks fire once immediately after the first time `#render` is called.
- `beforeRender` callbacks fire each time the render cycle begins, before the timeout for the next frame is set.
- `render` callbacks fire immediately after the timeout for the next frame is set and before the THREE renderer's render method is called.
- `afterRender` callbacks fire immediate after the THREE renderer's render method is called

### \#off('eventname', fn)

Unset a callback. To unset, you must pass the name of the event the callback was registered to, and the original callback function object.

### \#trigger('eventname', [arguments])

Trigger an event by name, with optional arguments to be passed to the callbacks.


