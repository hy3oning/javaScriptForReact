console.log("hello");

//배열의 구조분해할당
let array = [1, 2, 3, 4];
let one = array[0];
let two = array[1];
let three = array[2];
let four = array[3];
let [_one, _two, _three, _four, five = 5] = array;
console.log(_one);
console.log(_two);
console.log(_three);
console.log(_four);
console.log(five);

//객체의 구조분해할당
let person = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
};
let person2 = ({
  age: myAge,
  name: myName,
  hobby: myHobby,
  extra = "hihihihi",
} = person);
console.log(myAge, myName, myHobby, extra);

let _myAge = person.age;
let _myName = person.name;

// 객체 구조 분해 할당을 이용해서 함수의 매개변수를 받는 방법
//각 멤버변수를 변수로 저장하고, 출력하고싶을때
const printPerson = ({ name, age, hobby, extra = "hello" }) => {
  console.log(`name = ${name}`);
  console.log(`age = ${age + 1}`);
  console.log(`hobby = ${hobby}`);
  console.log(`extra = ${extra}`);
};

printPerson(person);
