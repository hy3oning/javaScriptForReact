console.log("hello");

//1.묵시적 형 변환
//자바스크립트 엔진이 알아서 형 변환

let num  = 10;
let str="20";

const result = num + str;
console.log(result)

let numberA = 12;
let numberB='2';
console.log(numberA * numberB); // 24

let numberC = 12;
let numberD='2';
console.log(numberC + numberD); // 122

console.log('---------------')
//2. 명시적 형 변환
//프로그래머가 내장함수 등을 이용해서 직접 형 변환을 명시
//문자열 -> 숫자
let str1= "10";
let strToNum1 = Number(str1);
console.log(10+strToNum1);

let str2 ="10개";
let strToNum2 = Number(str2) ; //NaN 출력이된다. 이럴떄는 parseInt() 사용
let strToNum3 = parseInt(str2);
console.log(strToNum2); //NaN출력
console.log(strToNum3); //10출력

//숫자 -> 문자열
let num1 = 20;
let numToStr1 = String(num1);
console.log(numToStr1+"입니다.")
