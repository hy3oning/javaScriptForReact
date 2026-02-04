console.log("hello");

// 1.배열 생성
let arrA = new Array(); //배열 생성자
let arrB = []; //배열 리터럴 (대부분 사용)
console.log(arrA);
console.log(arrB);

let array = [1, 2, 3, true, "hello", null, undefined, () => {}, {}, [10, true]];
// 2. 배열 요소 접근
console.log(`array[0]= ${array[0]}`);
array[0] = "array"; //배열값 수정
console.log(`array[0]= ${array[0]}`);
console.log(`array[1]= ${array[1]}`);
console.log(`array[2]= ${array[2]}`);
console.log(`array[3]= ${array[3]}`);
console.log(`array[4]= ${array[4]}`);
console.log(`array[5]= ${array[5]}`);
console.log(`array[6]= ${array[6]}`);
console.log(`array[7]= ${array[7]}`);
console.log(`array[8]= ${array[8]}`);
console.log(`array[9]= ${array[9]}`);
console.log(array);

let array2 = new Array();
array2.push("김동진");
array2.push(11);
array2.push("반갑습니다");
console.log(array2);
