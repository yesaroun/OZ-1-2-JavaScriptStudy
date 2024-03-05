
# 옵셔널 체이닝(Optional Chaining)

MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining

ECMAScript2020에서 등장한 문법이다.  
리액트에서 자주 사용되는 문법이므로 꼭 숙지해야 한다.

객체의 프로퍼티(속성)은 점표기법을 통해 접근한다.

```javascript
const adventurer = {
  name: 'Alice',
  cat: {
    name: 'Dinah',
  },
};

const catName = adventurer.cat.name;
console.log(catName); // Dinah
```

다만, 이렇게 중첩된 객체를 다룰 때 조심해야할 부분이 있다.

```javascript
const adventurer = {
  name: 'Jake',
};

const catName = adventurer.cat.name;
console.log(catName);
```
이렇게 cat 프로퍼티를 가지고 있지 않은 adventurer은 cat 프로퍼티가 undefined이므로 adventurer.cat.name에 접근하면 에러가 발생한다.

그래서 catName과 같이 중첩된 객체의 프로퍼티를 다룰 때는 adventurer.cat.name에 접근하기 전에 adventurer.cat이 null 또는 undefined가 아님을 확인하고 접근해야 에러를 방지할 수 있다.

이를 해결하기 위해서는 두개의 방식이 사용된다.

1. if문 또는 AND 연산자
```javascript
// if 문
if (adventurer.cat) {
  console.log(adventurer.cat.name);
}

// AND 연산자
console.log(adventurer.cat && adventurer.cat.name)
```
AND 연산자를 이렇게 활용할 수 있는 이유는 `1-12section.js`에 있는 SCE 때문이다.

2. Optional Chaining
```javascript
console.log(adventurer.cat?.name);
```
`?.`이게 옵셔널 체이닝 연산자이다.  
이 연산자는 왼쪽 프로퍼티 값이 undefined 또는 null이 아니라면 그다음 프로퍼티 값을 리턴하고,  
undefined 또는 null이라면 undefined를 반환한다.  

이걸 코드를 통해 동작 원리를 살펴보면 아래와 같다.
```javascript
console.log((adventurer.cat === null || adventurer.cat === undefined) ? undefined : adventurer.cat.name)
```

이 옵셔널 체이닝 연산자는 리액트에서 매우 자주 사용된다.

#### API 호출 결과 처리
```jsx
const MyComponent = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    fetch('https://api.example.com/users')
      .then((response) => response.json())
      .then((data) => setData(data));
  }, []);

  // data가 null인 경우 컴포넌트 렌더링 오류 발생
  const name = data.user.name;

  // Optional Chaining 사용
  const name = data?.user?.name;

  return (
    <div>
      <h1>{name}</h1>
    </div>
  );
};
```

#### 조건부 렌더링
```jsx
const MyComponent = ({ user }) => {
  return (
    <div>
      {user?.name && <h1>{user.name}</h1>}
      {!user?.name && <p>사용자 정보가 없습니다.</p>}
    </div>
  );
};
```


