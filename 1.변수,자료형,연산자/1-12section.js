// SCE(Short-circuit evaluation)
// 논리 연산에서 뒤의 조건을 평가하지 않고 결과를 반환하는 것이다.
let a = 10;
let b = 1;

console.log("변수 a, b 출력");
console.log("a : " + a); // 10
console.log("b : " + b); // 1

console.log("논리 연산자 &&");
let value = ((a = a + 10) < 10) && ((b = b + 2) < 10);
// ((a = 20) < 10) && ((b = b + 2) < 10);
// (20 < 10) && ((b = b + 2) < 10);
// false && ((b = b + 2) < 10);
// false
// && 오른쪽에 있는 값이 true든 false든
// 언제나 결과는 false이므로 오른쪽 연산을 진행하지 않고 끝낸다.

console.log(value);
console.log("a : " + a); // 20
console.log("b : " + b); // 1

console.log("논리 연산자 ||");
value = ((a = a + 10) > 10) || ((b = b + 2) < 10);
// ((a = 30) > 10) || ((b = b + 2) < 10);
// (30 > 10) || ((b = b + 2) < 10);
// true || ((b = b + 2) < 10);
// true
// || 오른쪽에 있는 값이 true든 false든
// 언제나 결과는 true이므로 오른쪽 연산을 진행하지 않고 끝낸다.

console.log(value);
console.log("a : " + a); // 30
console.log("b : " + b); // 1

// 이 연산은 리액트에서도 많이 사용된다.
// 특히 컴포넌트를 렌더링 할때 
// 조건부로 컴포넌트를 보여주는 경우 활용되며
// 이를 조건부 렌더링 이라고 한다.
// https://react.dev/learn/conditional-rendering#conditional-ternary-operator--
// 이 문서 우측에 Logical AND operator (&&) 있음
// 그리고 다음 section에는 Conditional (ternary) operator (? :)
