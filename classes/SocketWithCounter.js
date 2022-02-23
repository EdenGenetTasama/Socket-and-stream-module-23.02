const netServer = require('net').Server

class SocketWithCounter extends netServer {
  constructor () {
    super()
    this.listen('2503')
    this.on('connection', this.socketHandler)
  }

  socketHandler (socket) {
    console.log('ON AIR')
    this.socket = socket;
    this.setIntervalFun();
  }

  setIntervalFun () {
      let Monee = 1;
      setInterval(()=>{
        this.socket.write(`number of modee ${Monee = Monee * 2} |`)
      }, 4000)
  }
}

module.exports = new SocketWithCounter()
