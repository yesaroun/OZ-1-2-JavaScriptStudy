# forEach

forEach 메서드는 자신의 내부에서 반복문을 실행한다.  
for 문으로 구현된 예제를 forEach 메서드로 구현하면 다음과 같다.  

for 문
```javascript
const numbers = [1, 2, 3];
const pows = [];

for (let i = 0; i < numbers.length; i++) {
  pows.push(numbers[i] ** 2);
} 
console.log(pows); // [1, 4, 9]
```

forEach 메서드
```javascript
const numbers = [1, 2, 3];
const pows = [];

// forEach 메서드는 numbers 배열의 모든 요소를 순회하면서 콜백 함수를 반복 호출한다.
numbers.forEach(item => pows.push(item ** 2));

numbers.forEach((item) => {
    return pows.push(item ** 2);
})
console.log(pows); // [1, 4, 9]
```

forEach 메서드의 콜백 함수는 forEach 메서드를 호출한 배열의 요소값과 인덱스, forEach메서드를 호출한 배열 자체(this)를 순차적으로 전달받을 수 있다.(map과 유사)  

```javascript
[1, 2, 3].forEach((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/
```
