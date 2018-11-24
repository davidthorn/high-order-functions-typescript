import { Application } from './main'

function globalApplicationStateChangeHandler(app: Application): void {
   
    switch(app.state) {
        case "initialising":
        console.log('application is initialising')
        break
        case "running": 
        console.log('application is running')
        break;
        case "sleeping":
        console.log('application is sleeping')
        break;
        default: throw new Error('this is not a valid state')
    }

}

let app = new Application(globalApplicationStateChangeHandler)

//let handler = app.changeApplicationState((): Application => { return app } )

app.addOnStateChangedHandler((s): Application => {
    return app
})
let disposeMethod = app.dispose()
app.setup()
app.run()
app.sleep()



disposeMethod()