/*
test002. 변수
*/

// 변수 선언
let a;

// 변수 초기화(변수 a에 10 대입)
a = 10;

// 변수 선언 및 초기화(선언과 대입을 한 번에 처리)
let b = 20;

// 변수 선언
let c;

// 연산 및 처리
c = a + b;
// c = 10 + b;
// c = 10 + 20;
// c = 30;

// check
console.log(a); // 10
console.log(b); // 20
console.log(c); // 30

// 값 재할당
a = "Hi";
console.log(a); // Hi

console.log("----------------------------");

// var 예제
var varVariable = "var1";
console.log(varVariable);

// var로 선언된 변수는 중복 선언이 가능하다.
var varVariable = "var2";
console.log(varVariable);

// var로 선언된 변수의 데이터는 수정이 가능하다.
varVariable = "var3";
console.log(varVariable);

// let 예제
let letVariable = "let1";
console.log(letVariable);

// let으로 선언된 변수는 중복 선언이 불가능하다.
// let letVariable = "let2";
// console.log(varVariable);

// let으로 선언된 변수의 데이터는 수정이 가능하다.
letVariable = "let3";
console.log(letVariable);

// const 예제
const constVariable = "const1";
console.log(constVariable);

// const로 선언된 변수는 중복 선언이 불가능하다.
// const constVariable = "const2";
// console.log(constVariable);

// const로 선언된 변수의 데이터는 수정이 불가능하다.
// constVariable = "const3";
// console.log(constVariable);


console.log("----------------------------");

// 자료형의 종류
// String, Number, Boolean, undefined, null,
// Array, Object

// String(문자열)
// "", '' 안에 입력된 데이터는 문자열 데이터이다.
console.log("이건 문자열!");
console.log('이것도 문자열!');

// Number(숫자)
console.log(12);

// 숫자 타입은 여러 산술 연산자를 활용한 연산이 가능하다.
// 덧셈
console.log(1 + 2);
// 뺄셈
console.log(5 - 1);
// 곱셈
console.log(3 * 3);
// 나눗셈
console.log(6 / 2);
// 나머지
console.log(5 % 2);

// 만약 숫자가 아닌 값으로 연산을 시도하면,
// NaN(Not a Number)를 반환한다.
console.log("33" / "hi"); // NaN
