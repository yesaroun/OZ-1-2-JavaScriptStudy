/*
section1-11. 논리 연산자
*/

let a = true;
let b = false;

// AND
console.log("a && b : ", (a && b)); // false
// OR
console.log("a || b : ", (a || b)); // true
// NOT
console.log("!a : ", !a); // false
console.log("!b : ", !b); // true

console.log("----------------------");

// truthy, falsy

// 조건식에서 false로 간주되는 값들을 falsy 값이라고 한다.
// false
// 0
// "" (빈 문자열)
// null : 값이 없음을 나타내는 값
// undefined : 값이 할당되지 않음을 나타내는 값
// NaN : 숫자가 아님을 나타내는 값

// 나머지 값들은 모두 truthy 값으로 간주된다.
// 예: true, 1, "Hello", [], {}, 함수 등

// falsy 값들
console.log(Boolean(false));      // false
console.log(Boolean(0));          // false
console.log(Boolean(""));         // false
console.log(Boolean(null));       // false
console.log(Boolean(undefined));  // false
console.log(Boolean(NaN));        // false

// truthy 값들
console.log(Boolean(true));          // true
console.log(Boolean(1));             // true
console.log(Boolean("hello"));       // true
console.log(Boolean([]));            // true
console.log(Boolean({}));            // true
console.log(Boolean(function(){}));  // true
