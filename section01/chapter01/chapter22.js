console.log("hello");

// 배열 메소드 요소조작

// 1. push
// 배열의 맨 뒤에 새로운 요소를 추가하는 메서드
let arr1 = [1, 2, 3];
arr1.push(4);
const newLength = arr1.push(5, 6, 7); //push는 배열의 길이를 리턴한다.
console.log(arr1);
console.log("------------------");
// 2. pop
// 배열의 맨 뒤에 있는 요소를 제거하고, 반환
let arr2 = [1, 2, 3];
const poppedItem = arr2.pop(); //제거한값을 반환한다.
console.log(arr2);
console.log(poppedItem);
console.log("------------------");
// 3. Shift(pop보다 속도가 느리다)
// 배열의 맨 앞에 있는 요소를 제거, 반환
let arr3 = [1, 2, 3];
const shiftedItem = arr3.shift();
console.log(arr3);
console.log(shiftedItem);
console.log("------------------");
// 4. Unshift(push 보다 속도가 느리다)
// 배열의 맨 앞에 새로운 요소를 추가하는 메서드
let arr4 = [1, 2, 3];
const newLength2 = arr4.unshift(0); //변경된 배열의 길이를 반환한다.
console.log(arr4); // 0, 1, 2, 3
console.log(newLength2);
console.log("------------------");
// 5. slice
// 마치 가위처럼, 배열의 특정 범위를 잘라내서 새로운 배열로 반환
let arr5 = [1, 2, 3, 4, 5];
let sliced = arr5.slice(2, 5); //[3,4,5]
console.log(sliced);
let sliced2 = arr5.slice(2); //[3,4,5]
console.log(sliced2);
let sliced3 = arr5.slice(-3); //[3,4,5 ]
console.log(sliced3);
console.log("------------------");
// 6. concat
// 두개의 서로 다른 배열을 이어 붙여서 새로운 배열을 반환
let arr6 = [1, 2];
let arr7 = [3, 4];
let concatedArr = arr6.concat(arr7);
console.log(concatedArr); //[1,2,3,4]
