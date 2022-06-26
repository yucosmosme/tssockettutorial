//이 인터페이스 형식으로 매개변수를 받으면 이 형식을 지켜야함
// interface user{
//   name: string,
//   age: number
// }


// 소켓 연결 요청
class Client {
  private socket: SocketIOClient.Socket

  constructor() {
      this.socket = io()

      //소켓 연결시 서버로부터 "message"를 받으면
      // this.socket.on("message", function(message: user){
      //   console.log("message from server: ", message)
      //   //html에 출력
      //   document.body.innerHTML = message.name + " " + message.age
      // })
      this.socket.on("message", function(message: any){
        console.log("message from server: ", message)
        //html에 출력
        document.body.innerHTML += message + "<br/>"
      })

      //서버로부터 "random"을 받으면
      this.socket.on("random", function(message:any){
        console.log(message);
        document.body.innerHTML += "Winning number is " + message + "<br/>"
      })
  }
}

const client = new Client()