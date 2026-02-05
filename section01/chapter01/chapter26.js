console.log("hello");

// Spread 연산자 & Rest 매개변수

// 1. spread 연산자
let array1 = [1, 2, 3, 4, 5];
let array2 = [10, ...array1, 20, 30];
console.log(array2);
//얕은복사
let array3 = array1;

//깊은복사
let array4 = [];
array1.forEach((value) => array4.push(value));
console.log(array4);

let array5 = array1.filter((value) => value < 4);
console.log(array5);

let array6 = [...array1]; //스프레드
console.log(array6);
// for (let i = 0; i < array1.length; i++) {
//   array4.push(array1[i]);
// }
// console.log(array4);

// 2. Spread 연산자 (객체)
let obj1 = {
  a: 1,
  b: 2,
};
console.log(obj1);
let obj2 = {
  a: obj1.a, //얕은복사
  b: obj1.b,
  c: 3,
  d: 4,
};
console.log(obj2);
console.log(obj1.a === obj2.a);

// 깊은복사 (Spread)
let obj3 = {
  ...obj1,
  c: 3,
  d: 4,
};
console.log(obj3);

// 3. Spread 연산자 (함수매개변수)
//구조분해할당
funcA = ([p1, p2, p3]) => console.log(p1, p2, p3);
const arr = [1, 2, 3];
funcA(arr);

// 스프레드
funcB = (p1, p2, p3) => console.log(p1 + 10, p2 * 10, p3 / 10);
const arr1 = [1, 2, 3];
funcB(...arr1);

// 4.rest매개변수
// rest는 나머지, 나머지 매개변수
const array7 = [11, 12, 13];
function funcC(p1, ...rest) {
  console.log(p1, rest);
}
funcC(...array7);
