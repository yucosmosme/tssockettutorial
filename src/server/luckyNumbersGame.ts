export default class LuckyNumbersGame {
  //kv 딕셔너리형태 {소켓번호:랜덤번호}
  public LuckyNumbers: { [id: string]: number } = {}
  
  constructor() {}
  
  //숫자 받아서 string 반환
  public GetWinners(number: number): string[] {
    let ret: string[] = []
    for (let key in this.LuckyNumbers) {
          if (number === this.LuckyNumbers[key]) {
              ret.push(key)
          }
      }
      return ret
  }
}