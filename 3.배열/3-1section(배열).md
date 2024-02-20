
# 배열
배열(array)은 여러 값을 일렬로 저장하는 것이다.

```javascript
let classes = ["math", "korean", "english"];
```

## 인덱싱
배열 내부 요소의 위치(0, 1, 2 ... )를 인덱스라고 한다.  
인덱스로 요소를 접근하는 과정을 인덱싱이라고 한다.
```javascript
let classes = ["math", "korean", "english"];

console.log(classes[0]); // math
console.log(classes[2]); // english
console.log(classes[-1]); // undefined
// classes[-1]은 배열의 마지막 요소가 아니라 첫 번째 요소 이전을 의미
// 따라서 해당 인덱스가 존재하지 않기 때문에 undefined 반환
```

## 배열 관련 메서드
OZ 코딩 강의에 있는 내용이므로 가볍게 넘어가겠다.

### length
배열의 길이를 반환한다.  
```javascript
let classes = ["math", "korean", "english"];

console.log(classes.length); // 3
console.log(classes[clasees.length - 1]); // english
```

### slice()
두 인덱스 사이에 있는 요소들을 잘라낸다.
```javascript
let classes = ["math", "korean", "english"];

console.log(classes.slice(1, 3)); // ["korean" , "english"]
// 첫 번째 파라미터(1)는 시작 인덱스
// 두 번째 파라미터(3)는 끝 인덱스이다.
// 시작 인덱스부터 끝 인덱스 이전의 인덱스까지를 반환한다.
// 끝 인덱스에 있는 요소는 슬라이싱에 포함되지 않는다.
console.log(classes.slice(2)); // ["english"]
// 두 번째 파라미터를 생략하면
// 두 번째 인덱스부터 배열의 끝까지 슬라이싱된다.
console.log(classes.slice()); // ["math", "korean", "english"] 
// 파라미터를 전부 생략하면 배열 전체가 슬라이싱된다.
```

### 배열 수정 메서드(push, pop)
```javascript
let classes = ["math", "korean", "english"];

// push
clasees.push("history");
console.log(classes); // ['math', 'korean', 'english', 'history']
// push()는 배열의 끝에 요소를 추가한다.

// pop
clasees.pop();
console.log(classes); // ["math", "korean", "english"]
// pop()은 배열의 끝 요소를 삭제한다.
```

기존 요소를 수정할 때는 그냥 인덱싱을 사용하면 된다.
```javascript
let classes = ["math", "korean", "english"];

clasees[0] = "history";
console.log(clasees); // ['history', 'korean', 'english']
```

## 배열과 반복문

### 일반 for 반복문
```javascript
let classes = ["math", "korean", "english"];

for (let i = 0; i < classes.length; i++) {
  console.log(classes[i]);
}
/*
math
korean
english
*/
```

### for ... of 반복문
```javascript
let classes = ["math", "korean", "english"];

for (let topic of classes) {
  console.log(topic);
}
/*
math
korean
english
*/
```
변수(topic)에 배열 요소가 하나씩 할당된다.

원래는 map, filter, 등등 다양한 메서드 사용법도 같이 설명하고,   
배열 문제 풀이도 기본 방식 풀고 이후에 메서드로 변경해서도 풀어보려 했으나,  
함수에 대한 이해를 갖추고 풀어야겠다는 판단하에,  
함수를 배우고 기존 문제를 다양한 배열 메서드로 다시 풀어보겠다.    
