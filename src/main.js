"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(c, obj) {
    if (obj === undefined)
        return console.log("\t" + c + "\n");
    console.log("\t" + c + "\n", obj);
}
var Application = /** @class */ (function () {
    function Application() {
    }
    Application.prototype.setup = function () {
        console.clear();
        console.log('\n\n\n');
    };
    Application.prototype.run = function () {
        var func = function () {
            log('hello there, all');
        };
        func();
    };
    return Application;
}());
exports.Application = Application;
