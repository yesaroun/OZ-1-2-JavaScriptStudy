# 배열 생성
## 배열 리터럴

가장 일반적이고 간편한 배열 생성 방식이다.  

```javascript
const arr = [1, 2, 3];
```

## 생성자 함수

Array 생성자 함수를 통해 배열을 생성할 수도 있다.  

```javascript
const arr = new Array(10);

console.log(arr); // [empty * 10]
```

## Array.of

ES6에서 도입된 Array.of 메서드는 전달된 인수를 요소로 갖는 배열을 생성한다.  
```javascript
// 전달된 인수가 1개이고 숫자이더라도 인수를 요소로 갖는 배열을 생성한다.
Array.of(1); // [1]

Array.of(1, 2, 3); // [1, 2, 3]

Array.of('string'); // ['string']
```

## Array.from
ES6에서 도입된 Array.from 메서드는 유사 배열 객체(array-like object) 또는 이터러블 객체(iterable object)를 인수로 전달받아 배열로 변환하여 반환한다.

```javascript
// 유사 배열 객체를 변환하여 배열을 생성
Array.from({ length: 2, 0: 'a', 1: 'b' }); // ['a', 'b']

// 이터러블을 변환하여 배열을 생성한다.
// 문자열은 이터러블이다.
Array.from('Hello'); // ['H', 'e', 'l', 'l', 'o']
```

Array.from을 사용하면 두 번째 인수로 전달한 콜백 함수를 통해 값을 만들면서 요소를 채울 수 있다. 
```javascript
// Array.from에 length만 존재하는 유사 배열 객체를 전달하면 undefined를 요소로 채운다.
Array.from({ length: 3 }); // [undefined, undefined, undefined]

// Array.from은 두 번째 인수로 전달한 콜백 함수의 반환값으로 구성된 배열을 반환한다. 
// Array.from의 콜백 함수의 두 번째 인수는 현재 요소의 인덱스이다.
Array.from({ length: 3 }, (_, i) => i); // [0, 1, 2]

// Array.from의 콜백 함수의 첫 번째 인수는 현재 처리 중인 요소이다.
Array.from('hello', c => c); // ['h', 'e', 'l', 'l', 'o']

// 객체 사용
const objects = [{ name: 'kim', age: 30 }, { name: 'jung', age: 23 }];
Array.from(object, o => o.name); // ['kim', 'jung']
```

<br>

<hr>


##### 참고) 유사 배열 객체와 이터러블 객체
유사 배열 객체(array-like object)는 마치 배열처럼 인덱스로 프로퍼티 값에 접근할 수 있고,  
length 프로퍼티를 갖는 객체를 말한다.  
유사 배열 객체는 마치 배열처럼 for문으로 순회할 수도 있다.  
```javascript
// 유사 배열 객체
const arrayLike = {
  '0': 'apple',
  '1': 'banana',
  '2': 'oragne',
  length: 3
};

// 유사 배열 객체는 마치 배열처럼 for문으로 순회할 수도 있다. 
for (let i = 0; i < arrayLike.length; i++) {
  console.log(arrayLike[i]); // apple banana oragne
}
```

이터러블 객체(iterable object)는 for ... of 문으로 순회할 수 있으며, 스프레드 문법과 배열 디스트럭처링(section 6에서 학습할 예정) 할당의 대상으로 사용할 수 있는 객체를 말한다.  
ES6에서 제공하는 이터러블은 배열, 문자열, Map, Set 등이 있다.


# reduce
reduce 메소드는 누적값을 계산할 때 활용하는 메소드이다.  
reduce 메소드는 일반적으로 두 개의 파라미터를 활용한다.  
첫 번째는 반복동작을할 콜백함수이다. 매번 실행되는 콜백함수의 리턴값이 다음에 동작할 콜백함수의 첫 번째 파라미터로 전달된다. 결과적으로 마지막 콜백함수가 리턴하는 값이 reduce 메소드의 최종 리턴값이 되는것이다.  
이 때 reduce 메소드의 두 번째 파라미터로 전달한 초기값이 첫 번째로 실행될 콜백함수의 가장 첫 번째 파라미터로 전달되는 것이다.  
```javascript
const numbers = [1, 2, 3, 4];

// reduce
const sumAll = numbers.reduce((accumulator, element, index, array) => {
  return accumulator + element;
}, 0);

console.log(sumAll);    // 10
```

<br><br><br><br><br><br><br><br><br>