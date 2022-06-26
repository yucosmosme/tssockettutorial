import http from "http"
import socketIO from "socket.io"
import express from 'express'
import path from 'path'

const port: number = 3000

class App {
  private server: http.Server
  private port: number

  constructor(port: number){
    this.port = port

    const app = express();
    app.use(express.static(path.join(__dirname, '../client'))) //static 파일 경로 설정

    this.server = new http.Server(app);
    const io: socketIO.Server = socketIO(this.server);
    //127.0.0.1:3000/socket.io/socket.io.js 파일에 실제 소켓서버 js 파일이 있는데 그걸 제공받지 않도록 셋팅하려면 옵션에 {serveClient: false} 추가

    //소켓 연결되면
    io.on('connection', function (socket: socketIO.Socket){
      console.log('a user connected: ' + socket.id);
    }) 
  }

  public Start(){
    this.server.listen(this.port)
    console.log(`Server listening on port ${this.port}`)
  }
}

new App(port).Start()