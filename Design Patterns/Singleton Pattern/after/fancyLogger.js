 class FancyLogger {
    constructor() {
      // to insure that there is only one instance of this object has been created
      // if wen didnot create FancyLogger instance, so we want to create one
      // we always want to return that single instance every time from our constructor
      // instead of returning a bunch of different instances every time
      if(FancyLogger.instance == null){
        this.logs = [];
        FancyLogger.instance = this;
      }
      return FancyLogger.instance
    }
  
    log(message) {
      this.logs.push(message)
      console.log(`FANCY: ${message}`)
    }
  
    printLogCount() {
      console.log(`${this.logs.length} Logs`)
    }
  }


  // create an actual instance from sigleton
  const logger = new FancyLogger();
    // prevent this object from being changed 
    // now this logger class connot have any new methods or variabes added on to it 
    // or removed from it by our code   
  Object.freeze(logger);
  export default logger; // instead of exporting the class. we exporting the instance of it
