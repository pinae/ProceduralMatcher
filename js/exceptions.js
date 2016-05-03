"use strict";

var KeyNotFoundException = function(key) {
    this.name = "Key not Found Exception";
    this.msg = "The key '" + key + "' was not found.";
}