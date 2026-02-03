console.log("hello");

//1. Number Type
let num1 = 27;
let num2 = 1.5;
let num3 = -20;

console.log(num1 + num2);
console.log(num1 - num2);
console.log(num1 * num2);
console.log(num1 / num2);
console.log(num1 % num2); //나머지연산

let inf = Infinity;
let mInf = -Infinity;
// Not a Number
let nan = NaN; //수치연산이 실패했을 때 나타남 console.log(1 * "hello") 
console.log(inf);
console.log(mInf);
console.log(nan);
console.log(typeof inf);
console.log(typeof mInf);
console.log(typeof nan);


console.log("-------------------")
//3.템플릿 리터널
let name = "김동진";
let age = 30;
let introduceText = name + "님은 나이가" + age + "입니다.";
console.log(introduceText);
let introduceText2 = `${name}님은 나이가${age}입니다`;
console.log(introduceText2);

console.log("-------------------")
//4.Boolean Type
let isSwitchOn = true;
let isEmpty = false;

console.log("-------------------")
//5. Null Type
let empty = null;
console.log(empty)

console.log("-------------------")
//6. Undefines Type
let none;
console.log(none)
