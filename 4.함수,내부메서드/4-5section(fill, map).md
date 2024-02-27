# fill
fill메서드는 인수(argument)로 전달받은 값을 배열의 처음부터 끝까지 요소로 채운다.  
이때 원본 배열이 변경된다.  

```javascript
const arr = [1, 2, 3];

// 인수로 전달받은 값 0을 배열의 처음부터 끝까지 요소로 채운다.
arr.fill(0);

// fill 메서드는 원본 재열을 직접 변경한다.
console.log(arr); // [0, 0, 0]
```

두 번째 인수(argument)로 요소 채우기를 시작할 인덱스를 전달할 수 있다.
```javascript
const arr = [1, 2, 3];

// 인수로 전달받은 값 0을 배열의 인덱스 1부터 끝까지 요소로 채운다.
arr.fill(0, 1);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 0, 0]
```

세 번째 인수(argument)로 요소 채우기를 멈출 인덱스를 전달할 수 있다. 
```javascript
const arr = [1, 2, 3, 4, 5];

// 인수로 전달받은 값 0을 배열의 인덱스 1부터 3이전(인덱스 3 미포함)까지 요소로 채운다.
arr.fill(0, 1, 3);

// fill 메서드는 원본 배열을 직접 변경한다.
console.log(arr); // [1, 0, 0, 4, 5]
```


# map
배열의 요소를 하나씩 살펴보면서 반복 작업을 수행하는 메소드이다.  
첫번째 argument 로 전달하는 콜백 함수가 매번 리턴하는 값들을 모아서 새로운 배열을 만들어 리턴하는 특징이 있다.  
이때 원본 배열은 변경되지 않는다.

```javascript
const numbers = [1, 2, 3];

const roots = numbers.map(item => item * 2);
const roots = numbers.map((item) => {
  return item * 2;
})

// map 메서드는 새로운 배열을 반환한다.
console.log(roots); // [2, 4, 6]
// map 메서드는 원본 배열을 변경하지 않는다.
console.log(numbers); // [1, 2, 3]
```

map 메서드의 콜백 함수는 map 메서드를 호출한 배열의 요소값과 인덱스, map 메서드를 호출한 배열 자체(this)를 순차적으로 전달받을 수 있다.
```javascript
// map 메서드는 콜백 함수를 호출하면서 3개(요소값, 인덱스, this)의 인수를 전달한다.
[1, 2, 3].map((item, index, arr) => {
  console.log(`요소값: ${item}, 인덱스: ${index}, this: ${JSON.stringify(arr)}`);
  return item;
});
/*
요소값: 1, 인덱스: 0, this: [1,2,3]
요소값: 2, 인덱스: 1, this: [1,2,3]
요소값: 3, 인덱스: 2, this: [1,2,3]
*/
```

JSON.stringify() 메서드는 배열을 문자열로 출력하기 위해 사용했다.

