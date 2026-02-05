console.log("hello");

// 동기와 비동기

console.log(1);
setTimeout(() => {
  console.log(2);
}, 1000);
console.log(3);

//setInterval은 시간마다 계속 호출해줌
// setInterval(() => {
//   console.log(4);
// }, 1);

// 비동기 작업 처리하기(콜백함수)
// function task() {
//   setTimeout(() => {
//     console.log("hello");
//   }, 3000);
// }
// const task = () => {
//   setTimeout(() => {
//     console.log("hello");
//   }, 3000);
// };
// task();

//1번방식
//이벤트 : 시간이 3초가 지나면 setTimeout(핸들러작업,시간이벤트)
//이벤트처리일(함수로 만든것 : 핸들러함수)
function task(a, b) {
  setTimeout(() => {
    let sum = a + b;
    console.log(sum);
  }, 3000);
}
task(10, 20);

//2번방식 안씀
let callback = (sum) => console.log(sum);
function task1(a, b) {
  setTimeout(() => {
    let sum = a + b;
    callback(sum + 100);
  }, 3000);
}
task1(10, 20);

//3번방식
function task2(a, b, callback) {
  setTimeout(() => {
    callback(a, b);
  }, 3000);
}
task2(10, 20, (a, b) => console.log(`a+b = ${a + b + 500}`));

//1단계 음식
function orderFood(food, callback) {
  console.log(`${food}가 주문되었습니다`);
  setTimeout(() => {
    callback(food);
  }, 2000);
}
// orderFood("피자", (food) => {
//   console.log(`${food}가 완성되었습니다.`);
// });

function coolFood(food, callback) {
  console.log(`${food}가 주문되었습니다`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}
function coolDrink(food, callback) {
  console.log(`${food}가 주문되었습니다`);
  setTimeout(() => {
    callback(food);
  }, 3000);
}
// coolDrink("아아", (food) => console.log(`${food}가 완성되었습니다.`));
// coolFood("팥빙수", (food) => console.log(`${food}가 완성되었습니다.`));

//2,3단계 음식요청하고 => 디저트요청 => 음료요청
orderFood("피자", (food) => {
  console.log(`${food}가 완성되었습니다.`);
  coolFood("팥빙수", (food) => {
    console.log(`${food}가 완성되었습니다.`);
    coolDrink("아아", (food) => console.log(`${food}가 완성되었습니다.`));
  });
});
