"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class LuckyNumbersGame {
    constructor() {
        //kv 딕셔너리형태 {소켓번호:랜덤번호}
        this.LuckyNumbers = {};
    }
    //숫자 받아서 string 반환
    GetWinners(number) {
        let ret = [];
        for (let key in this.LuckyNumbers) {
            if (number === this.LuckyNumbers[key]) {
                ret.push(key);
            }
        }
        return ret;
    }
}
exports.default = LuckyNumbersGame;
//# sourceMappingURL=luckyNumbersGame.js.map