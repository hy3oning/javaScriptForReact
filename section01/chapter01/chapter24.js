console.log("hello");

// Date 객체와 날짜

// 1. Date 객체를 생성하는 방법 (표준시)
let date1 = new Date();
console.log(date1);
let timeValue = date1.getTime();
console.log(timeValue);
// 2. 사용자가 날짜를 설정하는 방법
let date2 = new Date(1995, 10 - 1, 9, 13, 55, 54);
let timeValue2 = date2.getTime();
console.log(date2);
console.log(timeValue2);

// 3. 상대방에게 getTime()주게되면, 날짜로 복구가능?
let date3 = new Date(timeValue2);
console.log(`date3=${date3}`);

// 4. 날짜 : 추출(년도, 월, 일, 시간, 분, 초)
let date4 = new Date();
let year = date4.getFullYear();
let month = date4.getMonth() + 1;
let day = date4.getDate();
let hour = date4.getHours();
let min = date4.getMinutes();
let sec = date4.getSeconds();
console.log(year);
console.log(month);
console.log(day);
console.log(hour);
console.log(min);
console.log(sec);

// 5. 날짜 : 수정(년도, 월, 일, 시간, 분, 초)
date4.setFullYear(2025);
date4.setMonth(2 - 1);
date4.setDate(4);
date4.setHours(18);
date4.setMinutes(55);
date4.setSeconds(22);

// 6. 시간은 제외하고 날짜만 출력하기
let date5 = new Date();
console.log(date5.toDateString());

// 7. 현재지역의 시간을 출력하기
console.log(date5.toLocaleDateString());
