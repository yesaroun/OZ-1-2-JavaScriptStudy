/*
test004. boolean 타입 및 암시적 형 변환
 */

let a = true;
console.log(a); // true

let b;

let c = 10,
  d = 20;

b = c > d;

console.log(b); // false

console.log("----------------------");

// bool 타입에서도 암시적 형 변환이 존재한다.
// true는 1
// false는 0
console.log(true + true); // 2
console.log(true + false); // 1
console.log(false * false); // 0

console.log("----------------------");

// 이중 등호 연산자와 삼중 등호 연산자

// 이중 등호 연산자는 두 값을 비교할때 사용한다.
console.log(10 == 1); // false
console.log(100 == 100); // true

console.log(100 == "100"); // true
// 여기에도 암시적 형 변환이 존재한다...
// 문자열 "100"을 숫자 100으로 변환 후 연산을 진행한다.

console.log("----------------------");

// 이러한 문제를 해결하기 위해
// 삼중 등호 연산자가 존재한다.
console.log(100 === "100"); // false
// 삼중 등호 연산자는 암시적 형 변환을 수행하지 않는다.
// 즉, 두 값의 타입과 값을 모두 체크한다.
