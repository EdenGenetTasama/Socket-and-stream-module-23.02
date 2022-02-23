const NetServer = require('net').Server;

class SocketServer extends NetServer{
    constructor(){
        super()
        this.listen('1811');
        this.on('connection' , this.socketHandler)
    }

    socketHandler(socketParam){
        console.log("Someone connected!!!!");
        this.socket = socketParam;
        this.setIntervalFunction();
    }

    setIntervalFunction(){
        let counter=0;
        setInterval(()=>{
            console.log("eeeeee")
            this.socket.write(`AGAIN ${counter++}`)
        },1000)
    }
}

module.exports = new SocketServer();