
# 함수

## 함수 선언
자바스크립트에서 가장 일반적으로 함수를 선언하는 방식은 function 키워드를 통해 선언하는 방식이다.

```javascript
// 함수 선언
function sayHi() {
  console.log("Hi");
}
```

## 매개변수(parameter), 인자(argument), 인수

매개변수(parameter), 인자(argument), 인수(argument)는 외우기!(영단어도 외우기!)

### 매개변수(parameter)
- 함수 정의 시 사용되는 변수이다.

```javascript
function add(a, b) {
  return a + b;
}
```
이 코드에서 매개변수는 `a`, `b`이다!

### 인자(argument), 인수(argument)
인자와 인수는 동일한 의미이다. 아래에서는 argument로 통일해서 설명하겠다.  

- argument는 함수를 호출할 때 전달되는 값으로 매개변수(parameter)에 값을 할당한다.

```javascript
const result = add(2, 3);
```
이 코드에서 argument는 `2`, `3`이다.  
argument 2는 매개변수 a에 할당되고,  
인자 3은 parameter b에 할당된다.  

### parameter의 기본값
함수의 파라미터는 기본값을 가질 수 있다.

```javascript
function sayHi(name = "lee") {
  console.log(`Hi ${name}`);
}

sayHi("kim"); // Hi kim
sayHi(); // Hi lee
```

파라미터의 기본값이 있는 함수를 호출할 때 argument를 전달하지 않으면,  
파라미터의 기본값을 활용해 함수 내부가 동작한다.

### arguments 객체
자바스크립트 함수 안에는 `arguments`라는 객체가 존재한다.  
`argmuents` 객체는 함수를 호출할 때 전달한 argument들을 배열의 형태로 모아둔 유사 배열 객체이다.

```javascript
function printArgs() {
  for (const arg of arguments) {
    console.log(arg);
  }
}

printArgs("1", "2", "3", "4");
```
참고: `for ... of 반복문`은 3-1section(배열)에서 정리되어 있다.

이렇게 arguments 객체의 요소들을 하나씩 출력할 수 있다.  
주로 argument의 개수가 불규칙적일때 사용할 수 있다.

참고)  
유사 배열 객체(Array-like object)는 배열처럼 생겼지만 실제로는 배열이 아닌 객체이다.  
그래서 length의 속성을 가지고 있고, 인덱스를 통해 요소에 접근할 수는 있으나,  
배열 메서드(forEach, map, filter 등)은 사용할 수 없다.

### Rest Parameter
parameter 앞에 마침표 세 개(`...`)를 붙여서 Rest Parameter를 사용할 수 있다.  
이 Rest Parameter는 arguments 객체와 유사하게 불규칙적으로 전달되는 argmuments를 다루는데 사용된다.    
다만, arguments 객체는 유사 배열이여서 배열 메서드를 사용할 수 없지만,   
Rest Parameter는 배열이기에 배열 메서드를 사용할 수 있다.

```javascript
function printArgs(...args) {
  for (const arg of args){
    console.log(arg);
  }
}

printArgs("1", "2", "3", "4");
```

Rest Parameter는 나머지 argument를 사용하거나, 객체의 프로퍼티(속성)를 추출할때 사용된다.

```javascript
function getRest(first, ...rest) {
  console.log(`첫 번째 요소: ${first}`);
  console.log(`나머지 요소: ${rest}`);
}

getRest(1, 2, 3, 4, 5);
// 첫 번째 요소: 1
// 나머지 요소: [2, 3, 4, 5]

const person = {
  name: "Kim",
  age: 30,
  address: "Seoul",
};

function printDetails({ name, ...rest }) {
  console.log(`이름: ${name}`);
  console.log(`나머지 정보: ${JSON.stringify(rest)}`);
}

printDetails(person);
// 이름: Kim
// 나머지 정보: {"age": 30, "address": "Seoul"}
```

리액트에서는 아래와 같이 사용된다.

```jsx
const MyComponent = ({ name, ...rest }) => {
  return (
    <div>
      <h1>{name}</h1>
      <p>{rest.age}</p>
      <p>{rest.address}</p>
    </div>
  );
};

const App = () => {
  const person = {
    name: "John",
    age: 30,
    address: "Seoul",
  };

  return <MyComponent {...person} />;
};
```

## 다양한 함수 선언 방법

### 익명 함수(Anonymous Functions)

```javascript
function () {
  console.log("hi");
}
```
함수의 이름이 없는 함수이다.  
익명함수는 변수에 할당하거나 소괄호로 감싸야만 사용할 수 있다.

### 함수 표현식(Function Expression)
함수 표현식을 통해 함수를 변수에 할당하거나 다른 식의 일부로 사용할 수 있다.  
이번에는 변수에 할당하는 방식을 살펴보겠다.

```javascript
const sayHi = function () {
  console.log("Hi");
}

sayHi(); // Hi

const add = function (a, b) {
  return a + b;
}

let result = add(1, 2);
console.log(result); // 3
```

### 즉시 실행 함수(IIFE: Immediately Invoked Function Expression)

함수를 선언한 순간 바로 실행할 수 있는 함수이다.

```javascript
(function () {
  console.log("hi");
})(); // hi
```
익명 함수를 소괄호로 감싼 다음에 함수를 실행하는 소괄호를 붙여서 사용한다.  
이러면 함수가 선언된 순간 바로 실행된다.

즉시 실행 함수에도 파라미터를 작성하고, 함수를 호출할 때 argument를 전달할 수 있다.

```javascript
(function (a, b) {
  console.log(a + b);
})(2, 3);
```

경험에 의하면 이러한 즉시 실행 함수는 jQuery에서는 자주 사용되지만, React에서는 거의 사용되지 않는다.  

### 화살표 함수(Arrow Function)
화살표 함수는 익명 함수를 간결하게 표현할 수 있도록 새롭게 등장한 함수 선언 방식이다.

```javascript
const sayHi = () => {
  console.log("Hi");
}

sayHi(); // Hi

const add = (a, b) => {
  return a + b;
}

let result = add(1, 2);
console.log(result); // 3
```

아래처럼 다양한 축양형도 사용된다. 
```javascript
// 1. 함수의 파라미터가 하나 뿐일 때
const getTwice = (number) => {
  return number * 2;
};

// 파라미터를 감싸는 소괄호 생략 가능
const getTwice = number => {
  return number * 2;
};

// 2. 함수 동작 부분이 return문만 있을 때
const add = (a, b) => {
  return a + b;
};

// return문과 중괄호 생략 가능
const add = (a, b) => a + b;
```

