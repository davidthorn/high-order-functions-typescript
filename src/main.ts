function log(c: string , obj?: any) {
    if(obj === undefined) return console.log(`\t${c}\n`)
    console.log(`\t${c}\n` , obj)
}

type highOrderFunctionHandler = (a: string) => string

type ApplicationStateChangeHandler = (app: Application) => void 
type MappedApplicationStateChangeHandler = (state: string) => Application 

export class Application {
    
    state: string = "sleeping"
    stateChangedHandler: ApplicationStateChangeHandler
    stateChangedEventHandlers: ApplicationStateChangeHandler[]

    constructor(callback: ApplicationStateChangeHandler) {
        this.stateChangedHandler = callback
        this.stateChangedEventHandlers = []
    }

    updateState(s: string) {
        this.state = s
        this.callHandlers()
    }

    changeApplicationState(app: (s: string) => Application): MappedApplicationStateChangeHandler {
        let _app = app(this.state)
        
        return (s) => {
            _app.updateState(s)
            return _app
        }
    }

    getHandler(index: number): ApplicationStateChangeHandler | undefined {
        return this.stateChangedEventHandlers[index]
    }

    addOnStateChangedHandler(callback: ApplicationStateChangeHandler) {
        this.stateChangedEventHandlers.push(callback)
    }

    setup() {
        this.updateState('initialising')
    }

    callHandlers()  {
        this.stateChangedHandler(this)
        if(this.stateChangedEventHandlers.length === 0) return

        this.stateChangedEventHandlers.forEach

        this.stateChangedEventHandlers.forEach(handler => {
            handler(this)
        })
    }

    myMethodName(b: string , map: highOrderFunctionHandler ): string {
        return map(b)
    }

    run( ) {
        this.updateState('running')
    }

    sleep() {
        this.updateState('sleeping')
    }

    dispose() : () => void {
        return () => {
            console.log('count of handler ' , this.stateChangedEventHandlers.length )
            this.stateChangedEventHandlers.forEach((h,i) => {
                delete this.stateChangedEventHandlers[i]
            })

            console.log('count of handler ' , this.stateChangedEventHandlers.length )
        }
    }
}   