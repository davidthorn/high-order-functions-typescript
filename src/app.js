"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var main_1 = require("./main");
function globalApplicationStateChangeHandler(app) {
    switch (app.state) {
        case "initialising":
            console.log('application is initialising');
            break;
        case "running":
            console.log('application is running');
            break;
        case "sleeping":
            console.log('application is sleeping');
            break;
        default: throw new Error('this is not a valid state');
    }
}
var app = new main_1.Application(globalApplicationStateChangeHandler);
//let handler = app.changeApplicationState((): Application => { return app } )
app.addOnStateChangedHandler(function (s) {
    return app;
});
var disposeMethod = app.dispose();
app.setup();
app.run();
app.sleep();
disposeMethod();
