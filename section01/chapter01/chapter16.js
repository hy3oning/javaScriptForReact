console.log("hello");

//상수 객체
const animal = {
  //멤버변수
  type: "고양이",
  name: "나비",
  color: "black",
  //멤버함수도 쓸수있따.
};
animal.age = 2;
animal.name = "까망이";
console.log(animal);

animal.type = (index) => index * 10;
let value = animal.type(10);
console.log(`value = ${value}`);

/*animal = {
  name: "호랑이",
  age: 10,
};새로운 객체를 대입할 수 없음*/
const animal2 = {
  name: "호랑이",
  age: 10,
  sayHi() {
    console.log("안녕");
  },
  sayHi2: function () {
    console.log("안녕하오");
  },
  sayHi3: () => console.log("반갑소"),
};
console.log(animal2);
animal2["sayHi2"]();
animal2.sayHi3();

//메서드
//값이 함수인 프로퍼티를 말함
const person = {
  name: "gindong",
  sayHi() {
    console.log("hi");
  },
  //익명함수도 가능
  sayHi2: function () {
    console.log("hihi");
  },
  //화살표함수도 가능
  sayHi3: () => {
    console.log("hihihi");
  },
};
person.sayHi();
person.sayHi2();
person["sayHi3"]();
