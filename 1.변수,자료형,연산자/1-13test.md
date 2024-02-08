# 삼항 연산자

```javascript
"조건" ? "조건이 true면 이거" : "조건이 false면 이거";
```

예제
```javascript
let result1 = true ? "조건이 true면 이거" : "조건이 false면 이거";
console.log(result1) // "조건이 true면 이거"

let age = 20;
let message = (age >= 18) ? "성인" : "미성년자";
console.log(message); // 성인
```

`___수식1___?___수식2___:___수식3___;`  

- 수식1 : 참(true) 또는 거짓(false)을 반환할 수 있는 수식 형태로 작성
- 수식2 : 수식1의 처리 결과가 참(true)일 경우 수행하는 영역
- 수식3 : 수식1의 처리 결과가 거짓(false)일 경우 수행하는 영역

[리액트 문서](https://react.dev/learn/conditional-rendering#conditional-ternary-operator--)
