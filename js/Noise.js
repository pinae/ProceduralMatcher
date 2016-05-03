"use strict";

function Noise() {
    Node.call(this);
    this.params['z'] = 0;
}

Noise.prototype = Object.create(Node.prototype);
Noise.prototype.constructor = Noise;

Noise.prototype.get = function(x, y) {
    return [Math.floor(Math.random()*255), Math.floor(Math.random()*255), Math.floor(Math.random()*255)];
}