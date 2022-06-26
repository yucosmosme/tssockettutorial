//npm i -g typescript
//terminal git bash에서 테스트
// node foo.ts로 하면 실행되는데 tsc foo.ts로 하면 실행 안된다.

//bar:string, bar:number, bar:number[] 등 으로 정해서 받음
//bar?:string 파라미터 안들어올수도 있을때
//bar: "car" | "bus"  car나 bus가 아닌 값이 들어오면 에러
function foo(bar: string) {
  return "Hello, " + bar;
}

// let baz = 1; //error
let baz = "ABC";
console.log(foo(baz));


//인터페이스는 두번 정의되면 merge가능하지만 type은 불가능. 
//그외의 역할은 거의같음
interface Quux {
  quuz: string
  corge: number
}

function foo2(bar: Quux){
  return "hello, " + bar;
}