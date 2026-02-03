console.log("hello");

//1. 함수 선언식

function funcA()  {
  console.log('funcA')
}
let varA = funcA;
varA();
console.log(varA)


//2. 함수 표현식

let varB = function(){
  console.log('funcB')
}
varB();

let varD = function funcD(){
  console.log("funcD");
}
varD();
// funD(); //에랍니다.. 함수명으로 호출하면 값이 안찍히므로 굳이 이름을 써줄 필요가 없다

//3. 화살표 함수 
let varC = (value) =>{
  console.log(value);
  return value + 1;
}
console.log(varC(10));
// 내용이 한줄이면 return 도 생략
let nameFunc = name => name+"님 반갑습니다."
let value = nameFunc("김동진")
console.log(value)