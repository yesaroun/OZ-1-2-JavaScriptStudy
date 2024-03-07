# Rest Parameter
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

Rest Parameter는 나머지 argument를 다룰때 사용된다.

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

function printDetails({ name, ...person }) {
  console.log(`이름: ${name}`);
  console.log(`나머지 정보: ${JSON.stringify(person)}`);
}

printDetails(person);
// 이름: Kim
// 나머지 정보: {"age": 30, "address": "Seoul"}
```

리액트에서는 아래와 같이 사용된다.

```jsx
const MyComponent = ({ name, ...person }) => {  // rest parameter
  return (
    <div>
      <h1>{name}</h1>
      <p>{person.age}</p>
      <p>{person.address}</p>
    </div>
  );
};

const App = () => {
  const person = {
    name: "John",
    age: 30,
    address: "Seoul",
  };

  return <MyComponent {...person} />;         // spread
};
```

# Spread
배열이나 객체와 같은 값은 바로 앞에 마침표 세 개를 붙여서 펼칠 수 있다.

## Spread 사용 예제
```javascript
// Spread 구문(Spread Syntax)
const numbers = [1, 2, 3];

console.log(...numbers);    // 1 2 3

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

const arr3 = [...arr1, ...arr2];
console.log(arr3);            // [ 1, 2, 3, 4, 5, 6 ]
```

Spread 구문은 배열이나 객체를 복사하거나 혹은 복사해서 새로운 요소들을 추가할 때 유용하게 활용될 수 있다.  
추가적으로 배열은 객체로 펼칠 수 있지만 객체는 배열로 펼칠 수 없다.

```javascript
const members = ['lee', 'kim', 'park'];

const newObject = {...members};

console.log(newObject);       // { '0': 'lee', '1': 'kim', '2': 'park' }

const myInfo = {
  name: 'lee',
  info: 'korean'
}
const newArray = [...myInfo];    // TypeError
```

## 객체 Spread 하기
```javascript
const myInfo = {
  name: 'lee',
};

 const myInfoClone = {
   ...myInfo,
 };

console.log(myInfo);        // { name: 'lee' }
console.log(myInfoClone);   // { name: 'lee' }
```
이렇게 중괄호 안에서 객체를 spread 하게되면, 해당 객체의 프로퍼티들이 펼쳐지면서 객체를 복사(깊은 복사)할 수가 있다.

```javascript
const latte = {
  esspresso: "30ml",
  milk: "150ml",
};

const cafeMocha = {
  ...latte,
  chocolate: "20ml",
}

console.log(latte);       // { esspresso: '30ml', milk: '150ml' }
console.log(cafeMocha);   // { esspresso: '30ml', milk: '150ml', chocolate: '20ml' }
```
이런 식으로 다른 객체가 가진 프로퍼티에 다른 프로퍼티를 추가해서 새로운 객체를 만들 때 활용할 수도 있다.

### 주의
배열을 Spread 하면 새로운 배열을 만들거나 함수의 아규먼트로 쓸 수 있었지만, 객체로는 새로운 배열을 만들거나 함수의 아규먼트로 사용할 수는 없다.
```javascript
[...latte];   // Error

(function (...args) { // rest parameter
  for (const arg of args) {
    console.log(arg);
  }
})(...cafeMocha);   // Error
```

그렇기 때문에 객체를 spread할 때는 반드시 객체를 표현하는 중괄호 안에서 활용해야 한다.


# 배열 Destructuring
```javascript
// 1. Destructuring 문법을 활용해서 numbers 배열의 각 요소를 one, two, three라는 변수에 할당
const numbers = [1, 2, 3];
const [one, two, three] = numbers;

// 2. Destructuring 문법을 활용해서 TV는 livingRoom, 나머지 요소들(배열)은 kitchen 변수에 할당
const products = ['TV', '식탁', '냉장고', '전기밥솥', '전자레인지', '오븐', '식기세척기'];
const [livingRoom, ...kitchen] = products;

// 3. Destructuring 문법을 활용해서 두 변수의 값을 서로 바꿈
let firstName = 'kim';
let lastName = 'lina';
[firstName, lastName] = [lastName, firstName];
```

# 구조 분해 Destructuring
배열과 객체와 같이 내부에 여러 값을 담고 있는 데이터 타입을 다룰 때 Destructuring 문법을 활용하면, 배열의 요소나 객체의 프로퍼티 값들을 개별적인 변수에 따로 따로 할당해서 다룰 수 있다.
```javascript
// Array Destructuring
const members = ['lee', 'kim', 'park'];
const [mackbook, ipad, coupon] = members;

console.log(mackbook);    // lee
console.log(ipad);        // kim
console.log(coupon);      // park

// Object Destructuring
const macbookPro = {
  title: '맥북 프로',
  price: 3000000,
};
```

함수에서 default parameter, rest parameter를 다루듯이 Destructuring 문법을 활용할 때도 기본값과 rest 문법을 활용할 수 있다.
```javascript
// Array Destructuring
const members = ['lee', 'park', undefined, 'kim', 'choi'];
const [macbook, ipad, airpod = 'cho', ...coupon] = members;

console.log(macbook);   // lee
console.log(ipad);      // park
console.log(airpod);    // cho
console.log(coupon);    // [ 'kim', 'choi' ]

// Object Destructuring
const macbookPro = {
  title: '맥북 프로',
  price: 3000000,
  memory: '16GB',
  storage: '1TB',
};

const { title, price, color = 'silver', ...rest } = macbookPro;

console.log(title);   // 맥북 프로
console.log(price);   // 3000000
console.log(color);   // silver
console.log(rest);    // { memory: '16GB', storage: '1TB' }
```
