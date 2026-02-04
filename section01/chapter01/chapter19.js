console.log("hello");

//자바스크립트 반복문

for (let i = 0; i < 5; i++) {
  console.log("김동진", i);
}

const person = {
  name: "김동진",
  age: 25,
  tall: 179,
};
const personKeys = Object.keys(person);
console.log(personKeys);

for (let index = 0; index < personKeys.length; index++) {
  const key = personKeys[index];
  console.log(`${key} = ${person[key]}`);
}
const personValues = Object.values(person);
console.log(personValues);
for (let index = 0; index < personValues.length; index++) {
  console.log(`${personValues[index]}`);
}
