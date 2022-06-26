//npm i -g typescript
//terminal git bash에서 테스트
// node foo.ts로 하면 실행되는데 tsc foo.ts로 하면 실행 안된다.
//bar:string, bar:number, bar:number[]
//bar?:string 파라미터 안들어올수도 있을때
//bar: "car" | "bus"  car나 bus가 아닌 값이 들어오면 에러
function foo(bar) {
    return "Hello, " + bar;
}
// let baz = 1; //error
var baz = "ABC";
console.log(foo(baz));
