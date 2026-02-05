console.log("hello");

// 1. promise pending 상태
/*
const task = () => {
  setTimeout(() => {
    console.log("안녕하시오");
  }, 3000);
};
task();
*/
/*
const promise = new Promise(() => {
  setTimeout(() => {
    console.log("안녕하시오");
    if (true) {
      //resolve상태
    } else {
      //reject상태
    }
  }, 3000);
});
console.log(promise); //[PromiseState]] :"pending"
*/

// resolve상태
/*
const promise2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕하시오");
    if (true) {
      //resolve상태
      resolve("promise 안녕");
    } else {
      //reject상태
    }
  }, 2000);
});
setTimeout(() => {
  console.log(promise2);
}, 3000);
*/
/*
const promise3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log("안녕하시오");
    if (false) {
      //resolve상태
      resolve("promise 안녕");
    } else {
      //reject상태
      reject("promise 실패");
    }
  }, 2000);
});
setTimeout(() => {
  console.log(promise3);
}, 3000);
*/

//4. Promise 를 실제로 활용해보자.
/*
const promise4 = new Promise((resolve, reject) => {
  // 비동기 작업 실행하는 함수
  // executor
  setTimeout(() => {
    const num = "10";
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});
setTimeout(() => {
  console.log(promise4);
}, 3000);
*/

//promise성공한 그 결과값을 출력한다.
/*
const promise5 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});
promise5.then((value) => console.log(`value = ${value}`));
promise5.catch((value) => console.log(`value = ${value}`));
setTimeout(() => {
  console.log(promise5);
}, 2500);
*/

// promise chain 방식으로 표현한다.
/*
const promise6 = new Promise((resolve, reject) => {
  setTimeout(() => {
    const num = 10;
    if (typeof num === "number") {
      resolve(num + 10);
    } else {
      reject("num이 숫자가 아닙니다");
    }
  }, 2000);
});
promise6
  .then((value) => console.log(`value = ${value}`))
  .catch((value) => console.log(`value = ${value}`));

setTimeout(() => {
  console.log(promise6);
}, 2500);
*/

// promise를 함수로 표현해서 사용해보자.
function add10(num) {
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof num === "number") {
        resolve(num + 10);
      } else {
        reject("num이 숫자가 아닙니다");
      }
    }, 2000);
  });
  return promise;
}
/*
let promise = add10('100')
  .then((value) => console.log(`성공 ${value}`))
  .catch((value) => console.log(`실패 ${value}`));
*/
//1단계
/*
let promise = add10(100);
promise
  .then((value) => {
    console.log(`성공 ${value}`);
    let _promise = add10(value);
    _promise.then((value) => {
      console.log(`성공한 결과 ${value}`);
    });
  })
  .catch((value) => console.log(`실패 ${value}`));
*/
//2단계
/*
let promise = add10(100);
promise
  .then((value) => {
    console.log(`성공 ${value}`);
    return add10(value);
  })
  .then((value) => {
    console.log(`성공한 결과 ${value}`);
  })
  .catch((value) => console.log(`실패 ${value}`));
*/

//3단계
/*
add10(100)
  .then((value) => {
    console.log(`성공 ${value}`);
    return add10(false);
  })
  .then((value2) => {
    console.log(`성공 ${value2}`);
    return add10(value2);
  })
  .then((value3) => console.log(`성공 ${value3}`))
  .catch((value) => console.log(`실패 ${value}`));
*/

function orderFood2(food) {
  const promise = new Promise((resolve, reject) => {
    console.log(`${food}를 주문`);
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(food + "음식완료");
      } else {
        reject(food + "음식실패");
      }
    }, 2000);
  });
  return promise;
}
// orderFood2("피자")
//   .then((value) => {
//     console.log(`성공 ${value}`);
//     return value;
//   })
//   .catch((err) => console.log(`실패 ${err}`));

function coolFood(food) {
  const promise = new Promise((resolve, reject) => {
    console.log(`${food}를 주문`);
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(food + "음식완료");
      } else {
        reject(food + "음식실패");
      }
    }, 2000);
  });
  return promise;
}
// coolFood("팥빙수")
//   .then((value) => {
//     console.log(`성공 ${value}`);
//     return value;
//   })
//   .catch((err) => console.log(`실패 ${err}`));

function freezeFood(food) {
  const promise = new Promise((resolve, reject) => {
    console.log(`${food}를 주문`);
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve(food + "음식완료");
      } else {
        reject(food + "음식실패");
      }
    }, 2000);
  });
  return promise;
}
// freezeFood("아아")
//   .then((value) => {
//     console.log(`성공 ${value}`);
//     return value;
//   })
//   .catch((err) => console.log(`실패 ${err}`));

/*
orderFood2("떡볶이")
  .then((value) => {
    console.log(value);
    return coolFood(value);
  })
  .then((value) => {
    console.log(value);
  })
  .catch((err) => console.log(err));
*/

//3단계 처리방식
orderFood2("떡볶이")
  .then((value) => {
    console.log(value);
    return freezeFood("팥빙수");
  })
  .then((value) => {
    console.log(value);
    return coolFood("아아");
  })
  .then((value) => console.log(value))
  .catch((err) => console.log(err));
//
