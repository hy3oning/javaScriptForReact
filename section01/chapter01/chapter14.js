console.log("hello");

// 객체 생성
// Prototype === 자바 상속구조
let obj1 = new Object(); //객체 생성자
console.log(obj1)
let arrayObj = new Array();
console.log(arrayObj)
let object = {}
console.log(object)

//2. 객체 프로퍼티 (객체 속성)
let person = {
  name : "홍길동",
  age : 30,
  hobby : "축구",
  job : "Developer",
  extra : {}, //객체도 들어올 수 있음
  extra2:function(){}, // 함수도 들어올 수 있음
  "like cat" : true, //한칸띄는 변수가 있으면 ""
}
person.extra2 = (index)=>console.log(index)
console.log(person["job"])
console.log(person.extra2("화살표함수"))
person.extra ={
  width : 10,
  height : 20
}
console.log(person.extra)
person.nation = "korea"


//3. 객체 프로퍼티를 다루는 방법
//3.1 특정 프로퍼티에 접근 (점 표기법, 대괄호 표기법)
let name = person.name;
let age = person["age2"];

let property = "hobby"
let hobby = person[property]

//3.2 새로운 프로퍼티를 추가하는 방법
person.job = 'fe developer'
person["favoriteFood"] = "떡볶이"
console.log(person);

//3.3 프로퍼티를 수정하는 방법
person.job = "educator"
person["favoriteFood"] = '초콜릿'
console.log(person);

//3.4 프로퍼티를 삭제하는 방법
delete person.job
delete person["favoriteFood"]
console.log(person);

//3.5 프로퍼티의 존재 유무를 확인하는 방법(in연산자)
let result1 = "name" in person
let result2 = "cat" in person
console.log(result2);


