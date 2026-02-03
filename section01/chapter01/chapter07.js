console.log("hello");

//1. 대입연산자.
let a = 1;
let b = 2;

//2. 산술연산자.
console.log(a+b)
console.log(a-b)
console.log(a*b)
console.log(a/b)
console.log(a%b)

//3.연결연산자
let c = "1";
let d = "2";
console.log(c+ d); //”12”

//4.복합대입연산자
let e = 5;
a += 10; //+=, -=, /=, %=, *=
console.log(a); //15
//5.증감연산자
let f = 10;
a++; // a--
console.log(a); //11
console.log(a++); //11 후위연산자 a--
console.log(a); //12
console.log(++a); //13 전위연사자 --a
console.log(a); //13
//6.논리연산자
console.log(!true); //false
console.log(!false); //true
console.log(true && true); //true 피연산자, 연사자(&&) 개념을이해할것
console.log(true || true); //true 피연산자, 연사자(||)

// 7. 비교연산자
let compareA = 1 =="1";  // == 비교연산자는 값만 비교한다. 타입비교X
console.log(compareA);

let compareB = 1 === "1"; // ===비교연산자는 값과 타입을 함께 비교한다.
console.log(compareB);

let compareC = 1 != "1";
console.log(compareC);

let compareD = 1 !== "1";
console.log(compareD);

//8.자바스트립트 동적타입기능
//: 타입의 유연성을제공하지만 에러를 발생할수 있는 기능임
let compareE = 1; //현재는 정수형타입
compareF = '1'; //정수형타입으로 선언된 변수에 문자열값을 넣어도 이상없음(동적타입기능)

//9.typeof 연산자
// 값의 타입을 문자열로 반환하는 기능을 하는 연산자
let compareG = 1;
console.log(typeof compareG); //number
compareG = '1';
console.log(typeof compareG); //string

//10. ?? (null 병합 연산자)
//병합 연산자라고 하는데 , 앞의 피연산자가 null혹은 undefined 라면 뒤 피연산자를 반환하고, 그렇지 않다면 앞의 피연산자를 반환한다. 즉 null,undefined 가 아닌 값을 선택한다.
let aa; //typeof undefined 가 저장되어 있음
aa = aa??10; //연산자(??)는 피연산자 중에 null이나 undefined가 아닌값을 선택한다.
console.log(aa) //10

aa= 30;
aa = aa??10
console.log(aa) //30

let y = "hi"
let z  = null;
let x = z ?? y;
console.log(x) 

//11. 삼항연산자
// 요구사항 : 변수 res에 var8의 값이 짝수 -> "짝", 홀수 -> "홀"
let var8 = 10;
let res = var8 % 2 === 0 ? "짝수" : "홀수";
console.log(res);