"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = __importDefault(require("http"));
const socket_io_1 = __importDefault(require("socket.io"));
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const port = 3000;
class App {
    constructor(port) {
        this.port = port;
        const app = (0, express_1.default)();
        app.use(express_1.default.static(path_1.default.join(__dirname, '../client'))); //static 파일 경로 설정
        this.server = new http_1.default.Server(app);
        const io = (0, socket_io_1.default)(this.server);
        //127.0.0.1:3000/socket.io/socket.io.js 파일에 실제 소켓서버 js 파일이 있는데 그걸 제공받지 않도록 셋팅하려면 옵션에 {serveClient: false} 추가
        //소켓 연결되면
        io.on('connection', function (socket) {
            console.log('a user connected: ' + socket.id);
        });
    }
    Start() {
        this.server.listen(this.port);
        console.log(`Server listening on port ${this.port}`);
    }
}
new App(port).Start();
//# sourceMappingURL=server.js.map