# axios

실무에서는 fetch 함수 보다는 axios 패키지를 더 자주 사용한다.  

```javascript
axios
  .get("https://koreanjson.com/users")
  .then((response) => { console.log(response); })
  .catch((error) => { console.log(error); });

fetch("https://koreanjson.com/users")
  .then((response) => { console.log(response.json()); })
  .catch((error) => { console.log(error); });
```

위 코드는 axios를 사용해 GET 요청을 보내고 그 response를 받는 코드이다.  
`axios.get`을 `fetch`로 수정하면  fetch함수와 사용법이 비슷하다는 생각이 들것이다.  

axios도 fetch와 유사하게 Promise 객체를 반환한다.   
그래서 fetch 함수의 사용법과 유사한 점이 많다.  

다만, axios 객체에는 fetch 함수에는 없는 다음과 같은 몇 가지 기능 및 장점들이 있다.

- 모든 리퀘스트, 리스폰스에 대한 공통 설정 및 공통된 전처리 함수 삽입 가능
- serialization, deserialization을 자동으로 수행
- 특정 리퀘스트에 대해 얼마나 오랫동안 리스폰스가 오지 않으면 리퀘스트를 취소할지 설정 가능(request timeout)
- 업로드 시 진행 상태 정보를 얻을 수 있음
- 리퀘스트 취소 기능 지원

이러한 자세한 방법은 아래 랭크를 통해 확인할 수 있다.
https://github.com/axios/axios

실제 axios를 사용하면서 하나씩 찾아가면서 공부하는 방식을 추천한다.
