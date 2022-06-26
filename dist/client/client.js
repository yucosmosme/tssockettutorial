"use strict";
// 소켓 연결 요청
class Client {
    constructor() {
        this.socket = io();
    }
}
const client = new Client();
