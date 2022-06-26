// 소켓 연결 요청
class Client {
  private socket: SocketIOClient.Socket

  constructor() {
      this.socket = io()
  }
}

const client = new Client()