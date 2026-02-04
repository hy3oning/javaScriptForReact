console.log("hello");

// 자바스크립트 배열 내장함수

//for each 내장함수 (화살표함수)
/*const array = [1, 2, 3, 4];

// console.log(array);

array.forEach((value, index, array) => {
  console.log(`value=${value}`);
  console.log(`index=${index}`);
  console.log(`array=${array}`);
  console.log("---------------");
});

array.forEach((value) => {
  console.log(`${value}`);
});
*/

/*const newArray = [];
for (let i = 0; i < array.length; i++) {
  let value = array[i];
  value = value * 10;
  newArray.push(value);
}
console.log(array);
console.log(newArray);
array.forEach((element) => {
  console.log(element * 10);
}); */

// Map
// 배열의 모든 요소를 순회하면서, 각각 콜백함수를 실행하고 그 결과값들을 모아서 새로운 배열로 반환
const array = [1, 2, 3, 4, 5, 3, 2, 4, 2, 5, 1, 5, 8, 5, 6, 5, 2, 4, 2, 4, 8];
let _newArray = array.map((value) => value * 10);
console.log(_newArray);

// filter
// 기존 배열에서 조건을 만족하는 요소들만 필터링하여 새로운 배열로 반환
let newArray1 = [];
let arr1 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
];
let itemA = arr1.filter((item) => item.hobby === "테니스");
console.log(itemA);
/*
for (let i = 0; i < arr1.length; i++) {
  let item = arr1[i];
  if (item.hobby === "테니스") {
    newArray1.push(item);
  }
}
console.log(arr1);
console.log(newArray1);
*/

// const array = [1, 2, 3, 4, 5, 3, 2, 4, 2, 5, 1, 5, 8, 5, 6, 5, 2, 4, 2, 4, 8];
let itemN = array.filter((value) => value === 1);
console.log(itemN);

//find, findIndex
/*
for (let i = 0; i < arr1.length; i++) {
  let item = arr1[i];
  if (item.hobby === "테니스") {
    findItem = item;
    break;
  }
}
console.log(findItem);
*/
let arrItem = arr1.find((item) => item.hobby === "테니스");
let arrItem1 = arr1.findIndex((item) => item.hobby === "독서");
console.log(arrItem);
console.log(arrItem1);

let arrItem2 = array.indexOf(5);
console.log(arrItem2);

// slice
let arr2 = [
  { name: "구길동", hobby: "테니스" },
  { name: "저길동", hobby: "테니스" },
  { name: "홍길동", hobby: "독서" },
  { name: "김동진", hobby: "게임" },
  { name: "홍동진", hobby: "음악" },
];
let arr3 = [
  { name: "김동진", hobby: "코딩" },
  { name: "이상현", hobby: "공부" },
];
let newArray2 = arr2.slice(0, 4);
console.log(newArray2);

// concat
let concatArr = arr2.concat(arr3);
console.log(concatArr);

// sort
// 자바스크립트는 문자단위로 정렬(숫자도 문자로정렬)
let chars = ["나", "다", "가"];
// let chars1 = chars.toSorted((a, b) => a.localeCompare(b)); //오름차순
//내림차순
let chars1 = chars.toSorted((a, b) => b.localeCompare(a)); //원본은 건드리지않음
console.log(chars);
console.log(chars1);

//숫자를 정렬(문자단위)
let arr4 = [0, 1, 3, 2, 10, 30, 20];
arr4.sort();
console.log(arr4); // 0,1,10,2,20,3,30 정렬된거임

//숫자를 정렬(크기순) 빼는 순서를 바꾸면 내림차순
let arr5 = [0, 1, 3, 2, 10, 30, 20];
arr5.sort((num1, num2) => {
  return num1 - num2;
});
console.log(arr5);

//join
const arr6 = ["김동진", "님", "안녕하세요", "반가워요"];
const joined = arr6.join("==");
console.log(joined);

const arr7 = joined.split("==");
console.log(arr7);
