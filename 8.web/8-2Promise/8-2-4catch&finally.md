# catch

**catch메소드는 then 메소드의 첫 번째 인자로 undefined를 넣은 것과 유사하다!**  

그래서 아래 두 개의 코드는 동일하다고 생각해도 괜찮다.

```javascript
// 인터넷 연결 해제 후 테스트

fetch("https://koreanjson.com/users")                   // Promise-A 
  .then((response) => response.json())                  // Promise-B
  .then(undefined, (error => { console.log(error); }))  // Promise-C
  .then((result) => { console.log(result) });           // Promise-D
```

```javascript
// 인터넷 연결 해제 후 테스트

fetch("https://koreanjson.com/users")                   // Promise-A 
  .then((response) => response.json())                  // Promise-B
  .catch((error => { console.log(error); }))            // Promise-C
  .then((result) => { console.log(result) });           // Promise-D
```

위의 코드를 자세히 보면 다음과 같다.  

fetch 함수의 작업이 실패해, Promise-A 객체가 rejected 상태가 된다.  
그래서 첫 번째 then 메소드의 두 번째 콜백이 실행되어야 하지만,  
두 번째 콜백이 없기 때문에 아무 콜백도 실행되지 않는다.  
then을 공부하면서 살펴본 것과 같이 **Promise-B 객체는 Promise-A와 똑같은 rejected 상태가 되고, 동일한 작업 실패 정보를 갖게 된다.**  
그리고 catch를 만나게 되면서 catch 메소드의 콜백이 실행되는 것이다.  

catch 메서드가 실행된 이후가 중요한데,  
다시 기억해야하는 점은 문서 맨 앞에서 catch 메서드는 then 메소드라고 말한 점이다.  
지금 코드에서 catch 메서드는 아무 값도 반환하지 않았다.  
이렇게 자바스크립트에서는 아무값도 반환하지 않은 경우에는 undefined를 반환한 것으로 간주한다고 했었다.  
따라서 then을 공부하면서 본 것과 같이 **catch 메소드가 반환한 Promise 객체는 fulfilled 상태가 되면서, undefined를 작업 성공 결과로 가지게 되는 것이다.(Promise-C)**  
그래서 그 뒤에 then 메소드의 콜백 파라미터(result)로 undefined가 넘어가 undefined를 출력한다.  

# finally

`try {} catch {}` 문(예외문)에 finally이 있었던 것처럼 Promise에도 `finally`가 있다.  

**finally() 메소드는 then 메소드의 첫 번째, 두 번째 인자로 같은 값을 넣은 것과 유사하다!**  

즉, `finally(f)` 호출은 `.then(f, f)`와 유사한 것이다.  

```javascript
fetch("https://koreanjson.com/users")                   // Promise-A 
  .then((response) => response.json())                  // Promise-B
  .finally(() => { console.log("hi!"); })               // Promise-C
  .then((result) => { console.log(result) });           // Promise-D

//.then(() => { console.log("hi!"); }, () => { console.log("hi!"); })
```
이 코드는 인터넷은 연결하든 연결하지 않든 "hi!" 문자열이 출력된다.  

다만, then 메소드와 차이점이 존재하는데,  
finally 메소드는 자동으로 다음 메소드에게 이전 상태와 작업 정보를 전달한다는 점이다.  
간단하게 생각하면 통과 한다고 생각해도 된다.  




