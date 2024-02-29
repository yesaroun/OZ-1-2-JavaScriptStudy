# find 메소드
find 메소드는 filter 메소드와 비슷하게 동작하지만,  
배열의 요소들을 반복하는 중에 콜백함수가 리턴하는 조건과 일치하는 가장 첫 번째 요소를 리턴하고 반복을 종료하는 메소드이다.
```javascript
const devices = [
    {name: 'GalaxyNote', brand: 'Samsung'},
    {name: 'MacbookPro', brand: 'Apple'},
    {name: 'Gram', brand: 'LG'},
    {name: 'SurfacePro', brand: 'Microsoft'},
    {name: 'ZenBook', brand: 'Asus'},
    {name: 'MacbookAir', brand: 'Apple'},
];

const myLaptop = devices.find((element, index, array) => {
    console.log(index);
    return element.name === 'Gram';
});
/*
0
1
2
*/
```

# some 메소드
some 메소드는 배열 안에 콜백 함수가 리턴하는 조건을 만족하는 요소가 1개 이상 있는지를 확인하는 메소드이다.  
배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족하지 않는다면 false 를 리턴하고,  
만족하는 요소가 등장한다면 바로 true를 리턴하고 반복을 종료한다.
```javascript
const numbers = [1, 3, 5, 7, 9];

// some: 조건을 만족하는 요소가 1개 이상 있는지
const someReturn = numbers.some((element, index, array) => {
  console.log(index);   // 콘솔에는 0, 1, 2, 3 까지만 출력됨.
  return element > 5;
});

console.log(someReturn);    // true
```

# every 메소드
every 메소드는 배열 안에 콜백 함수가 리턴하는 조건을 만족하지 않는 요소가 1개 이상 있는지를 확인하는 메소드이다.  
배열을 반복하면서 모든 요소가 콜백함수가 리턴하는 조건을 만족한다면 true 를 리턴하고, 조건을 만족하지 않는 요소가 등장한다면 바로 false를 리턴하고 반복을 종료한다.
```javascript
const numbers = [1, 3, 5, 7, 9];

// every: 조건을 만족하지 않는 요소가 1개 이상 있는지
const everyReturn = numbers.every((element, index, array) => {
  console.log(index);   // 콘솔에는 0까지만 출력됨.
  return element > 5;
});

console.log(everyReturn);   // false
```

# sort 메소드
배열에서 sort라는 메소드를 활용해 배열을 정렬할 수 있다.  
sort 메소드에 아무런 argument도 전달하지 않을 때는 기본적으로 유니코드에 저장된 문자열 순서에 따라 정렬된다.  
```javascript
const letters = ['D', 'C', 'E', 'B', 'A'];
const numbers = [1, 10, 4, 21, 36000];

letters.sort();
numbers.sort();

console.log(letters);   // [ 'A', 'B', 'C', 'D', 'E' ]
console.log(numbers);   // [ 1, 10, 21, 36000, 4 ]
```

그렇기 때문에 numbers에 sort 메소드를 사용한 것처럼 숫자를 정렬할 때는 우리가 일반적으로 생각하는 오름차순이나 내림차순으로 정렬이 되지 않는다.  
그럴 땐 sort 메소드에 아래와 같은 콜백함수를 argument로 작성해주면 된다.
```javascript
const nums = [1, 10, 4, 21, 36000];

// 오름차순 정렬
nums.sort((a, b) => a - b);
console.log(nums);      // [ 1, 4, 10, 21, 36000 ]

// 내림차순 정렬
nums.sort((a,b) => b - a);
console.log(nums);      // [ 36000, 21, 10, 4, 1 ]
```
이렇게 사용하는 이유는 반환 값에 따른 sort() 함수의 해석때문이다.  
> 반환 값 < 0 : a가 b보다 앞에 있어야 한다.  
> 반환 값 = 0 : a와 b의 순서를 바꾸지 않는다.  
> 반환 값 > 0 : b가 a보다 앞에 있어야 한다.


sort 메소드를 사용할 때 주의할 점은 메소드를 실행하는 원본 배열의 요소를 정렬한다는 점이다. 
그래서 한 번 정렬하면 정렬하기 전의 순서로 다시 되돌릴 수 없다. 그래서 미리 다른 변수에 복사해두는게 좋다.  


# reverse 메소드
reverse 메소드는 배열의 순서를 뒤집어 주는 메소드이다.  
reverse 메소드는 별도의 파라미터가 존재하지 않는다. 단순히 메소드를 호출해주기만 하면 배열의 순서가 뒤집힌다.  
sort 메소드와 마찬가지로 원본 배열의 요소들을 뒤집어 버린다.  
```javascript
const letters = ['a', 'c', 'b'];
const numbers = [421, 721, 353];

letters.reverse();
numbers.reverse();

console.log(letters);   // [ 'b', 'c', 'a' ]
console.log(numbers);   // [ 353, 721, 421 ]
```

# Map과 Set
ES2015에서 객체와 비슷한 Map과 배열과 비슷한 Set이라는 데이터 구조가 새롭게 나왔다.  

# Map
Map은 이름이 있는 데이터를 저장한다는 점에서 객체와 비슷하다.   
하지만, 할당 연산자를 통해 값을 추가하고 점 표기법이나 대괄호 표기법으로 접근하는 일반 객체와 다르게 Map은 메소드를 통해서 값을 추가하거나 접근할 수 있다.  

new 키워드를 통해서 Map을 만들 수 있고 아래와 같은 메소드를 통해 Map 안의 여러 값들을 다룰 수 있다.

- map.set(key, value): key를 이용해 value를 추가하는 메소드
- map.get(key): key에 해당하는 값을 얻는 메소드. key가 존재하지 않으면 undefined를 반환.
- map.has(key): key가 존재하면 true, 존재하지 않으면 false를 반환하는 메소드.
- map.size: 요소의 개수를 반환하는 프로퍼티. (단, 메소드가 아니다! 배열의 length 프로퍼티와 같은 역할)
- map.delete(key): key에 해당하는 값을 삭제하는 메소드.
- map.clear(): Map 안의 모든 요소를 제거하는 메소드.

```javascript
// Map 생성
const data = new Map();

// set 메소드
data.set('title', '문자열 key');
data.set(2023, '숫자형 key');
data.set(true, '불린형 key');

// get 메소드
console.log(data.get(2023));    // 숫자형 key
console.log(data.get(true));    // 불린형 key
console.log(data.get('title')); // 문자열 key

// has 메소드
console.log(data.has('title'));   // true
console.log(data.has('name'));    // false

// size 프로퍼티
console.log(data.size);   // 3

// delete 메소드
data.delete(true);
console.log(data.get(true));    // undefined
console.log(data.size);         // 2

// clear 메소드
data.clear();
console.log(data.get(2023));    // undefined
console.log(data.size);         // 0
```

문자열과 심볼 값만 key(프로퍼티 네임)으로 사용할 수 있는 일반 객체와는 다르게 Map 객체는 메소드를 통해 값을 다루기 때문에, 다양한 자료형을 key로 활용할 수 있다.  

# Set
Set은 여러 개의 값을 순서대로 저장한다는 점에서 배열과 비슷하다. 하지만, 배열의 메소드는 활용할 수 없고 Map과 비슷하게 Set만의 메소드를 통해서 값을 다루는 특징이 있다.  
Map과 마찬가지로 new 키워드로 Set을 만들 수 있고 아래와 같은 메소드를 통해 Set 안의 여러 값들을 다룰 수 있다.

- set.add(value): 값을 추가하는 메소드. (메소드를 호출한 자리에는 추가된 값을 가진 Set 자신을 반환.)
- set.has(value): Set 안에 값이 존재하면 true, 아니면 false를 반환하는 메소드.
- set.delete(value): 값을 제거하는 메소드.(메소드를 호출한 자리에는 셋 내에 값이 있어서 제거에 성공하면 true, 아니면 false를 반환.)
- set.clear(): Set안의 모든 요소를 제거하는 메소드
- set.size: 요소의 개수를 반환하는 프로퍼티.(메소드가 아니다! 배열의 length 프로퍼티와 같은 역할)

```javascript
// Set 생성
const members = new Set();

// add 메소드
members.add('lee');
members.add('kim');
members.add('ji');
members.add('park');

// has 메소드
console.log(members.has('lee'));    // true
console.log(members.has('cho'));    // false

// size 프로퍼티
console.log(members.size);    // 4

// delete 메소드
const cho = members.delete('cho');
console.log(cho);   // false
const lee = members.delete('lee');
console.log(lee);   // true

// clear 메소드
members.clear();
console.log(members.size);    // 0
```
일반 객체는 프로퍼티 네임으로, Map은 get 메소드로, 그리고 배열은 index를 통해서 개별 값에 접근할수 있었다.  
하지만, Set은 개별 값에 바로 접근하는 방법이 없다.

```javascript
// Set 생성
const members = new Set();

// add 메소드
members.add('lee');
members.add('kim');
members.add('park');
members.add('hwang');

for (const member of members) {
  console.log(member);     // 한 명씩 순서대로 콘솔에 출력
}
```
그래서 위 코드처럼 반복문을 통해서 전체 요소를 한꺼번에 다룰 때 반복되는 그 순간에 개별적으로 접근할 수 있다.  

이런 특징을 가지고도 Set을 사용하는 경우는 중복을 허용하지 않는 값들을 모을 때이다.

Set은 중복되는 값을 허용하지 않는 특징이 있다.
```javascript
const members = new Set();

// add 메소드
members.add('lee');
members.add('lee');
console.log(members);   // Set(1) { 'lee' }
```
최초에 추가된 순서를 유지하면서, 나중에 중복된 값을 추가하려고 하면 그 값은 무시

처음 Set을 생성할 때 argument로 배열을 전달할 수도 있다.  
이런 특징을 활용해 배열내에서 중복을 제거한 값들의 묶음을 만들 때 Set을 활용하기도 한다.
```javascript
const numbers = [1, 3, 4, 3, 3, 3, 2, 1, 1, 1, 5, 5, 3, 2, 1, 4];
const uniqNumbers = new Set(numbers);

console.log(uniqNumbers);   // Set(5) { 1, 3, 4, 2, 5 }
```
