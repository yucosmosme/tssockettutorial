import http from "http"
import socketIO from "socket.io"
import express from 'express'
import path from 'path'
import LuckyNumbersGame from './luckyNumbersGame'

const port: number = 3000

class App {
  private server: http.Server
  private port: number
  private io: socketIO.Server
  private game: LuckyNumbersGame

  constructor(port: number){
    this.port = port

    const app = express();
    app.use(express.static(path.join(__dirname, '../client'))) //static 파일 경로 설정

    this.server = new http.Server(app);
    this.io = new socketIO.Server(this.server);
    //127.0.0.1:3000/socket.io/socket.io.js 파일에 실제 소켓서버 js 파일이 있는데 그걸 제공받지 않도록 셋팅하려면 옵션에 {serveClient: false} 추가
    this.game = new LuckyNumbersGame()
    console.log('thisgame::::::', this.game)

    //소켓 연결되면
    this.io.on('connection', (socket: socketIO.Socket)=>{
      console.log('a user connected: ' + socket.id);
      const socketid = socket.id
      
      console.log('thisgame::::::', )
      //게임 LuckyNumbers 변수에 key(소켓아이디), value(랜덤숫자) 넣음
      //주의!!!!! this.io로 함수를 만들고 나면 다른 this.game에 접근이 안됨---> this.io에서 만든 함수를 arrow function으로 만들면 해결!!
      this.game.LuckyNumbers[socketid] = Math.floor(Math.random()*10)
      
      // 소켓에서 연결된 모든 클라이언트에 메시지 전달
      // socket.emit("message", {name: socket.id, age: 35}) //network response body에서 확인 가능
      // socket.emit("message", "Hello, " + socket.id)
      socket.emit(
          'message',
          'Hello ' +
              socket.id +
              ', your lucky number is ' +
              this.game.LuckyNumbers[socket.id]
      )
      
      //sender인 socket의 클라이언트는 제외하고 메시지 전달
      socket.broadcast.emit("message", "Everybody, say hello to" + socket.id)

      //연결 끊기면 할 행동 정의
      socket.on('disconnect', function(){
        console.log('socket disconnected:' + socket.id);
      })
    })

    //10초마다 클라이언트에 랜덤 숫자 전송 
    // setInterval(()=> {this.io.emit("random", Math.floor(Math.random()*10))},10000)
    
    //1초마다 랜덤 숫자 생성해서 클라이언트와 소켓 연결시 생성된랜덤숫자와 같은 숫자면 위너가 됐다고 메시지 전송
    setInterval(() => {
      let randomNumber: number = Math.floor(Math.random() * 10)
      let winners: string[] = this.game.GetWinners(randomNumber)
      if (winners.length) {
        winners.forEach((w) => {
          //하나의 클라이언트에만 메시지 전달
          this.io.to(w).emit('message', '*** You are the winner ***')
        })
      }
      this.io.emit('random', randomNumber)
    }, 10000)

  }

  public Start(){
    this.server.listen(this.port)
    console.log(`Server listening on port ${this.port}`)
  }
}

new App(port).Start()