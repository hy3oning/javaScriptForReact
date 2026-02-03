console.log("hello");

//함수 선언식, 함수표현식, 화살표함수

// 함수 호이스팅 = 함수 선언문에만 적용됨
let getArea;
/*function getArea(width,height){
  // width = width ?? 10;
  height = height ?? 20;
  console.log(`나는 함수 선언식width = ${width ?? 30}, height = ${height}`)
}
getArea(null,20)*/

getArea = (width,height) =>{
height = height ?? 20;
  console.log(`나는 함수 선언식width = ${width ?? 30}, height = ${height}`)
}

console.log(getArea)
getArea(null,undefined)

console.log('---------함수선언식---------')
getArea2(10,20)
console.log(getArea2)
function getArea2 (width,height){
  let area = width * height;
  console.log(`width = ${width} height = ${height} area = ${area}`)
}


console.log('---------함수표현식---------')
let getArea3 =function(width,height){
  let area = width * height;
  console.log(`width = ${width} height = ${height} area = ${area}`)
}
getArea3(10,20)
console.log(getArea3)

console.log('---------화살표함수---------')
let getArea4 = (width,height) =>{
  let area = width * height;
  console.log(`width = ${width} height = ${height} area = ${area}`)
}
getArea4(10,20)
console.log(getArea4)


// 함수
let area1 = getArea5(10, 20);
console.log(area1);
let area2 = getArea5(30, 20);
console.log(area2);
getArea5(120, 200);
// 호이스팅이란 끌어올리다 라는 뜻
function getArea5(width, height) {
 let area = width * height;
 return area;
}