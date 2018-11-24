function log(c: string , obj?: any) {
    if(obj === undefined) return console.log(`\t${c}\n`)
    console.log(`\t${c}\n` , obj)
}

export class Application {

    
    setup() {
        console.clear()
        console.log('\n\n\n')
    }

    run() {
        
        const func = () => {
            log('hello there, all')
        }
        
        func()


    }




























}   