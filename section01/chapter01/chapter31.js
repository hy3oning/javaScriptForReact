console.log("hello");

// 비동기 작업 처리하기 (async/await)

async function getData() {
  return { name: "김동진", age: 60 };
}

function getData2() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let flag = true;
      if (flag) {
        resolve({ name: "김동진", age: 60 });
      } else {
        reject("비동기처리요청 실패");
      }
    }, 1000);
  });
}
console.log(getData2());

async function printData() {
  getData2().then((value) => console.log(value));
}

async function printData2() {
  const data = await getData2();
  console.log(data);
}
printData2();
