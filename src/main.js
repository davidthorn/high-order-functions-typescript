"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function log(c, obj) {
    if (obj === undefined)
        return console.log("\t" + c + "\n");
    console.log("\t" + c + "\n", obj);
}
var Application = /** @class */ (function () {
    function Application(callback) {
        this.state = "sleeping";
        this.stateChangedHandler = callback;
        this.stateChangedEventHandlers = [];
    }
    Application.prototype.updateState = function (s) {
        this.state = s;
        this.callHandlers();
    };
    Application.prototype.changeApplicationState = function (app) {
        var _app = app(this.state);
        return function (s) {
            _app.updateState(s);
            return _app;
        };
    };
    Application.prototype.getHandler = function (index) {
        return this.stateChangedEventHandlers[index];
    };
    Application.prototype.addOnStateChangedHandler = function (callback) {
        this.stateChangedEventHandlers.push(callback);
    };
    Application.prototype.setup = function () {
        this.updateState('initialising');
    };
    Application.prototype.callHandlers = function () {
        var _this = this;
        this.stateChangedHandler(this);
        if (this.stateChangedEventHandlers.length === 0)
            return;
        this.stateChangedEventHandlers.forEach;
        this.stateChangedEventHandlers.forEach(function (handler) {
            handler(_this);
        });
    };
    Application.prototype.myMethodName = function (b, map) {
        return map(b);
    };
    Application.prototype.run = function () {
        this.updateState('running');
    };
    Application.prototype.sleep = function () {
        this.updateState('sleeping');
    };
    Application.prototype.dispose = function () {
        var _this = this;
        return function () {
            console.log('count of handler ', _this.stateChangedEventHandlers.length);
            _this.stateChangedEventHandlers.forEach(function (h, i) {
                delete _this.stateChangedEventHandlers[i];
            });
            console.log('count of handler ', _this.stateChangedEventHandlers.length);
        };
    };
    return Application;
}());
exports.Application = Application;
