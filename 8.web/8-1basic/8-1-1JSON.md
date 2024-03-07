# 객체와 JSON의 차이

## JSON은 언제나 큰따옴표(")사용

JS에서 customer 객체를 생성하면 아래와 같이 생성할 수 있다.

```javascript
const customer = {
  name: 'kim',
  email: 'kim@example.com',
  age: 20,
  purchases: ['iPone', 'Gram Pro']
};
```
다만, JS의 객체는 각각의 프로퍼티를 정의할때 자유도가 높다.  
예를 들어 아래의 예시들도 모두 동일한 객체이다.  

작은따음표가 아닌 큰따움표로 감싼 경우
```javascript
const customer = {
  name: "kim",
  email: "kim@example.com",
  age: 20,
  purchases: ["iPone", "Gram Pro"]
};
```

키도 큰따움표로 감싼 경우
```javascript
const customer = {
  "name": "kim",
  "email": "kim@example.com",
  "age": 20,
  "purchases": ["iPone", "Gram Pro"]
};
```

마지막 키 value에도 콤마(`,`)를 붙인 경우
```javascript
const customer = {
  "name": "kim",
  "email": "kim@example.com",
  "age": 20,
  "purchases": ["iPone", "Gram Pro"],
};
```

하지만 JSON에서는 오직 아래의 경우만 가능하다.

```json
{
  "name": "kim",
  "email": "kim@example.com",
  "age": 20,
  "purchases": ["iPone", "Gram Pro"]
}
```
작은따움표는 불가능하고 꼭 큰따옴표를 사용해야한다!  
키도 꼭 큰따옴표로 감싸야 한다!  
마지막 값에는 콤마가 꼭 없어야 한다!  

## JSON에서 사용할 수 없는 값들
undefined, NaN, Infinity 등은 JSON의 값으로 사용할 수 없다.  

JSON은 JavaScript Opbject Notaion의 약자로  
자바스크립트 객체 표기법으로 생각하면 된다.  
이처럼 JSON은 자바스크립트에서 비롯된 데이터 포맷이지만,  
JS에 종속되지 않고 모든 언어나 환경에서 사용할 수 있는 데이터 포맷이기에  
JS문법에 있는 undefined, NaN, Infinity 개념은 사용할 수 없는 것이다.  

## JSON은 주석을 작성할 수 없다.
JSON은 코드가 아니라 데이터 포맷이다 그래서 그 안에 주석을 작성할 수 없다.  


