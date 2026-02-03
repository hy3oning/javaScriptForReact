console.log("hello");

//변수
console.log("-----------let-----------")
let no = 27;
console.log("no = "+ no);
no = "abc";
console.log("no = "+  no);

console.log("-----------var-----------")
var no1 = 27;
console.log("no1 =" + no1);
var no1 = 30;
console.log("no1 =" + no1);

console.log("-----------상수-----------")
//상수
const birth = "1997.01.07"
console.log(birth)

console.log("-----------변수 명명규칙-----------")
// 변수 명명규칙 (네이밍 규칙)
//3.1 $,_ 제외한 특수기호는 사용할 수 없다.
let $_name = 123;
console.log($_name);
//3.2 숫자로 시작할 수 없다.
//3.3 예약어를 사용할 수 없다.

console.log("-----------변수 명명가이드-----------")
//4. 변수 명명 가이드
let a = 1;
let b = 2;
let salesCount = 1;
let refundCount = 1;
let totalSalesCount = salesCount-refundCount;
console.log(totalSalesCount)
