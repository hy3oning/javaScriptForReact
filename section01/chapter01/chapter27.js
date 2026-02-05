console.log("hello");

//1. 사용자 정의 객체
let obj1 = { name: "홍길동", age: 32 };
let obj2 = { ...obj1 };
obj2["hobby"] = "테니스";
console.log(obj1 === obj2);

// JSON.stringify 객체를 문자열로 변환
console.log(JSON.stringify(obj1) === JSON.stringify(obj2)); //서로 문자열로 바꿔 비교하기때문에 True
