
# Promise

https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Promise

MDN 문서에서 Promise를 다음과 같이 설명한다.

> Promise는 프로미스가 생성된 시점에는 알려지지 않았을 수도 있는 값을 위한 대리자로,  
> 비동기 연산이 종료된 이후에 결과 값과 실패 사유를 처리하기 위한 처리기를 연결할 수 있습니다.  
> 프로미스를 사용하면 비동기 메서드에서 마치 동기 메서드처럼 값을 반환할 수 있습니다.  
> 다만 최종 결과를 반환하는 것이 아니고, 미래의 어떤 시점에 결과를 제공하겠다는 '약속'(프로미스)을 반환합니다.

간단히 생각하면,  
Promise는 비동기 연산을 다룰 때 사용되는 객체라고 생각해도 괜찮다.  

# Promise Chaining

Promise Chaining을 통해 여러 개의 비동기 작업을 순차적으로 실행하거나 연결할 수 있다.  

Promise chaining은 다음과 같이 작동한다.  

1. Promise객체를 생성한다.
2. then 메서드를 사용해 해당 Promise 객체가 상공적으로 완료될 때 실행할 콜백 함수를 지정한다.  

```javascript
fetch('https://koreanjson.com/users/1')       // (1)
  .then((response) => response.json())        // (2)
  .then((result) => { console.log(result) })  // (3)
```
이 예제에서 첫 번째 then(2)은 koreanjson에서 데이터를 가져오는 Promise(1) 가 성공할때 실행한다.  
그러면 첫 번째 then(2)은 자신의 콜백을 수행하고, 여기서 반환되는 값(response.json())은   
두 번째 then(3)의 인자로 넘어간다. 두 번째 then(3) 또한 첫번째 then(1)이 성공할때 실행되는 것이다.  

이처럼 Promise Chaining을 통해 비동기 작업을 순차적으로 실행(연결)할 수 있다.

# Promise 객체 생성
Promise 객체도 객체의 일종이다.  
그래서 Promise 생성자 함수를 통해 직접 만들 수도 있다.  
이때 Promise 생성자 함수는 두 개의 콜백 함수를 매개변수로 받는다.(`resolve`와 `reject`)   
이 두 함수는 비동기 작업의 성공(`resolve`) 또는 실패(`reject`)를 나타냅니다.    

resolve는 작업이 성공적으로 완료되면 이 함수를 호출해 결과 값을 전달한다.  
reject는 작업이 실패하면 이 함수를 호출해 실패 사유를 전달한다.  

간단한 예제로 살펴보면,  

promise1.js -> 실행해보기
```javascript
// Promise 객체 생성
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  const success = true;
  if (success) {
    resolve("성공적으로 완료됨");
  } else {
    reject("실패함");
  }
});
```
이처럼 Promise 생성자 함수 내부에 비동기 작업을 수행하고, 작업의 결과에 따라 resolve 또는 reject 함수를 호출하는 것이다.  

이 Promise를 사용하는 코드는 다음과 같다.  
```javascript
promise
  .then(result => {
    console.log("이행 상태:", result);
  })
  .catch(error => {
    console.error("거부 상태:", error);
  });
```
위의 코드에서 `then` 메서드는 작업이 성공적으로 완료되었을 때 실행되며,   
`catch` 메서드는 작업이 실패했을 때 실행된다.(catch메서드는 이후에 더 구체적으로 다룬다.)

이렇게 직접 만든 Promise 객체는 비동기 작업을 처리하고  
작업의 결과 또는 실패 이유를 처리하는데 사용할 수 있다.  

# Promise 객체 종류
위 코드를 통해 Promise는 작업이 성공적으로 완료되었을때 resolve 함수를 실행하고,  
작업이 실패했을때 reject 함수를 실행한다는 것을 알게 되었다.  
그렇다면 이러한 성공, 실패 여부는 어떻게 알 수 있을까?

성공, 실패 여부는 Promise 객체의 상태를 통해 알 수 있다.  
Promise는 세 가지 주요 상태를 가질 수 있다.  

1. 대기(Pending):
   - Promise 객체가 생성된 초기 상태
   - 아직 결과가 결정되지 않았다.

2. 이행(Fulfilled):
   - Promise 객체가 성공적으로 완료되었을 때의 상태
   - 이행 상태에서는 `then` 메서드를 사용하여 성공 콜백 함수를 실행
   - `resolve` 함수를 호출하여 이행 상태로 전환

3. 거부(Rejected):
   - Promise 객체가 실패했을 때의 상태
   - 거부 상태에서는 `catch` 메서드를 사용하여 에러 처리 콜백 함수를 실행
   - `reject` 함수를 호출하여 거부 상태로 전환

Promise 객체는 이러한 세 가지 상태 중 하나에 속해야 한다.  
그리고 이행 또는 거부 상태가 결졍되면 다른 상태로 변경할 수 없다.  

promise1.js를 통해서 이행 및 거부 상태를 볼 수 있다.

```javascript
// Promise 객체 생성
const promise = new Promise((resolve, reject) => {
  // 비동기 작업 수행
  const success = true;
  if (success) {
    resolve("성공적으로 완료됨");
  } else {
    reject("실패함");
  }
});

// Promise 상태에 따라 처리
promise
  .then(result => {
    console.log("이행 상태:", result);
  })
  .catch(error => {
    console.error("거부 상태:", error);
  });
```
위 코드에서 `resolve` 또는 `reject` 함수에 전달된 값에 따라 Promise 객체의 상태가 결정되며,  
해당 상태에 따라 `then` 또는 `catch` 블록이 실행된다.

# text(), json()

```javascript
fetch('https://www.daum.net')
  .then((response) => response.text())
  .then((result) => { console.log(result) })
```

```javascript
fetch('https://koreanjson.com/users')
  .then((response) => response.json())
  .then((result) => { console.log(result) })
```

앞에서 text() 메소드와 json() 메소드를 단순히 text를 읽어오거나 json을 객체로 변환하는 메소드라고 설명했다.  

사실 text(), json()는 Promise 객체를 반환하는 메소드이다.

### text()
fetch 함수로 리스폰스를 잘 받으면,  
response 객체의 text 메소드는,  
fulfilled 상태이면서 response의 body(본문)에 있는 내용을  
string 타입으로 변환한 값을 '작업 성공 결과'로 가진 Promise 객체를 리턴한다.  
이때 그 작업 성공의 결과는 string 타입이고   
만약, 그 값이 JSON 형식이라면 JSON 객체의 parse 메소드로 Deserialize 해줘야 한다.(`JSON.parse(result)`)

fetch1.js
```javascript
fetch('https://koreanjson.com/users')
  .then((response) => response.text())
  .then((stringData) => JSON.parse(stringData))
  .then((result) => { console.log(result) })
```

### json()
fetch 함수로 리스폰스를 잘 받으면,  
response 객체의 json 메소드는,  
fulfilled 상태이면서 response의 body에 있는 JSON 데이터를  
자바스크립트 객체로 Deserialize해서 생겨난 객체를  
'작업 성공 결과'로 가진 Promise 객체를 리턴한다.  
만약 response의 body(본문)에 있는 내용이 JSON 타입이 아니라면  
에러가 발생하고 Promise 객체는 rejected 상태가 되면서  
그 '작업 실패 정보'를 갖게 됩니다.

---
#### 참고
Serialize(직렬화) : 객체를 전송하기 위한 형태로 변환하는 과정(JSON 또는 XML 등의 형식으로 변환)
Deserialize(역직렬화) : 직렬화된 데이터를 다시 객체로 변환하는 과정(JSON 또는 XML 등의 형식을 Object형식으로 변환)

response 객체는 Node.js 강의의 1-28 또는 JS 강의의 5-6 참고!!  
response 객체에 대해 간단히 말하면, 서버에 응답 받은 데이터(html, json, 이미지 등등)

