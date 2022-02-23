const netServer = require('net').Server

class ClockTimer extends netServer {
  constructor () {
    super()
    this.listen('0505')
    this.on('connection' , this.handlerFunction)
  }

  handlerFunction (socketParam) {
    console.log('SERVER IS ON AIR')
    this.socket = socketParam;
    this.setIntervalFun();
  }

  setIntervalFun () {
    setInterval(() => {
      let DateUpdated = new Date().toString();
      this.socket.write(DateUpdated)
    }, 1000)
  }
}

module.exports = new ClockTimer();
