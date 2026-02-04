console.log("hello");

//19장
const animal = {
  name: "고양이",
  cry: "야옹",
  tall: 50,
};

//위 배열에서 key값만 반환해라.

let animalKeys = Object.keys(animal);
console.log(animalKeys);

//위 배열에서 value값만 반환해라.

let animalValues = Object.values(animal);
console.log(animalValues);

// animal객체에서 value가 Number인 값만 반환하시오.
let valuesNum = Object.values(animal).filter((num) => typeof num === "number");
console.log(valuesNum);

// 20장

const item = [
  { name: "검", price: 500, rank: 4 },
  { name: "창", price: 1500, rank: 3 },
  { name: "방패", price: 3500, rank: 2 },
  { name: "총", price: 10000, rank: 1 },
];

// 위 배열에서 price가 3000이하인 배열을 찾아라
let itemPrice = item.filter((gold) => gold.price <= 3000);
console.log(itemPrice);

// 위 배열에서 rank 순으로 내림차순을 해라. 숫자가 작을수록 높음
let itemRank = item.toSorted((a, b) => a.rank - b.rank);
console.log(itemRank);

// 위 배열에서 price 값을 두배를 올려서 출력해라
let doublePrice = item.map((p) => ({ ...p, price: p.price * 2 }));
console.log(doublePrice);

// 위 배열에서 세번째까지만출력되게 하여라
console.log(item.slice(0, 3));

// 새로운 아이템 배열을 만들어서 위 배열과 합하여라
const item2 = [
  { name: "반지", price: 15000, rank: 2 },
  { name: "목걸이", price: 25000, rank: 1 },
];
console.log(item.concat(item2));

// 합친 배열에서 name : '목걸이' 찾아서 출력하여라
const findItem = item.concat(item2).find((n) => n.name === "목걸이");
console.log(findItem);

//합친 배열에서 "반지" 의 index번호를 찾아라
const indexItem = item.concat(item2).findIndex((n) => n.name === "반지");
console.log(indexItem);

// item 배열에서 join을 사용하여 name 사이에 * 를 붙여서 출력하여라
let itemName = item.map((n) => n.name);
console.log(itemName);
let joinItem = itemName.join("*");
console.log(joinItem);
