console.log("hello");

function chectMood(mood,goodCallback,badCallback){
  if (mood === "good"){
    goodCallback();
  }else{
    badCallback();
  }
}
function cry(){
  console.log("ACTION :: CRY")
}
function sing(){
  console.log("ACTION :: SING")
}
function dance(){
  console.log("ACTION :: DANCE")
}
chectMood("sad",sing,dance)

console.log('----------------')

// 콜백함수적용 함수선언, 함수표현, 화살표함수
function repeat(count, callback){
  for (let index = 0; index < count; index++) {
  // 콜백함수를 진행한다.    
  callback(index)
  }
}
let funcA = (index) => console.log(index)
let funcB = (index) => console.log(index*10)
let funcC = (index) => console.log(index*10+5)
repeat(5,(index) => console.log(index*100))
