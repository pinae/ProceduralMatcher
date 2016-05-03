"use strict";

var Node = function() {
    this.params = {}
}

Node.prototype.getParamKeys = function() {
    var keys = [];
    for(var key in this.params){
        keys.push(key);
    }
    return keys;
}

Node.prototype.getParams = function() {
    return this.params;
}

Node.prototype.setParam = function(key, value) {
    if(key in this.getParamKeys) {
        this.params[key] = value;
    } else {
        throw new KeyNotFoundException(key);
    }
}

Node.prototype.get = function(x, y) {
    return [0, 0, 0];
}