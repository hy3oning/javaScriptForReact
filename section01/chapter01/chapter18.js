console.log("hello");

// 단락평가
let varA = false;
let varB = true;

// And 연산자
console.log(varA && varB);
// OR 연산자
console.log(varA || varB);

let returnFalse = () => {
  console.log("falseFunction");
  return false;
};
let returnTrue = () => {
  console.log("trueFunction");
  return true;
};

console.log(returnFalse() && returnTrue()); //false값 먼저
console.log(returnTrue() && returnFalse());
console.log("---------------------");
console.log(returnTrue() || returnFalse()); //true값 먼저
console.log(returnFalse() || returnTrue());

let test = 0; //기본타입들은 false로 취급
//NaN, undefined, false, 0, "", null
if (test) {
  console.log(`${test} = true 취급한다.`);
} else {
  console.log(`${test} = false 취급한다.`);
}

//단락평가테스팅
//함수선언문(호이스팅)
function printName(person) {
  const name = person && person.name;
  console.log(name || "person의 값이 없음");
}
printName({ name: "김동진" });
