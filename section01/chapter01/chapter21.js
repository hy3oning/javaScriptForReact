console.log("hello");

// 반복문으로 배열과 객체 순회하기

//1. 일반 for문
const array = [1, 2, 3, 4, 5];
for (let i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log("============");
//2.foreach
array.forEach((value) => {
  console.log(value);
});
console.log("============");
//3. for of
for (let data of array) {
  console.log(data);
}
console.log("============");
//4.for in
for (let index in array) {
  console.log(`index=${index},${array[index]}`);
}
//==============================================
// 5.1 객체 순회, Object.keys 사용
let person = {
  name: "홍길동",
  age: 27,
  hobby: "테니스",
};
console.log("============");
// 객체에서 key 값들만 뽑아서 새로운 배열로 반환
let keys = Object.keys(person);
for (let key of keys) {
  const value = person[key];
  console.log(key, value);
}
console.log("============");
// 5.2 Object.values
// 객체에서 value 값들만 뽑아서 새로운 배열로 반환
let values = Object.values(person);
for (let value of values) {
  console.log(value);
}
