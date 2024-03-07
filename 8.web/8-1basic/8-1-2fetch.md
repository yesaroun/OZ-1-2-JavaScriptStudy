
# fetch
서버에 네트워크 요청을 보내고 정보를 받아오는 일을 수행한다.  

기본 문법
```javascript
let promise = fetch(url, [options]);
```
url 파라미터는 접근하고자하는 URL을 입력한다.  
options 파라미터는 작성하지 않아도 괜찮은 선택적인 매개변수로 method나 header 등을 지정할 수 있다.  
options에 아무것도 넘기지 않으면 요청은 GET 메서드(가져오는 메서드)로 진행되며 url로부터 콘텐츠를 가져온다.  
우선은 options에 아무것도 없는 상태를 다루겠다.  
fetch()를 호출하면 브라우저는 네트워크 요청을 보내고 프라미스(Promise)가 반환된다.  
Promise 객체에 대해서는 Promise챕터에서 다룬다.

```javascript
fetch('https://www.daum.net')
  .then((response) => response.text())
  .then((result) => { console.log(result) })
```

이렇게 실행하면, daum의 html을 출력한다.  

이 fetch함수의 실행 원리는 다음과 같다.  
fetch 함수는 Promise 객체를 리턴한다.  
`fetch('https://www.daum.net')` -> `Promise객체`  
then메소드는 응답(response)이 왔을때 실행할 콜백을 등록할 수 있다.  
이걸 쉽게 말하면, then 메소드는 fetch() 메서드의 결과(Promise객체)가 도착하면 실행할 함수를 등록할 수 있다.  
`Promise객체.then((response) => response.text())`  
이때의 콜백은 이전의 콜백이 리턴한 값을 인자로 받는다.  
`Promise객체.then((response) => response.text())`  
-> `Promise객체.then((Promise객체) => Promise객체.text())`  
-> `Promise객체.text().then((result) => { console.log(result) })`  
-> `.then((Promise객체.text()) => { console.log(Promise객체.text()) })`

---

#### 참고  
```javascript
fetch('https://www.daum.net')
  .then((response) => { console.log(response) })
```
이렇게 text로 읽어오지 않고 그대로 출력하면 Promise 객체 정보가 출력된다.  
그래서 text로 읽어와야 한다.


## JSON에서 사용

##### 참고  
[실습용 json 사이트](https://koreanjson.com/)  
[json 크롬 확장 프로그램](https://chromewebstore.google.com/detail/jsonvue/chklaanhfefbnpoihckbnefhakgolnmc?pli=1)

```javascript
fetch('https://koreanjson.com/users')
  .then((response) => response.json())
  .then((result) => { console.log(result) })
```
json에서도 비슷하게 사용하면 된다.  
다만, json() 함수를 사용해 json을 javascript객체로 파싱(parsing, 변환)해야 한다.  


