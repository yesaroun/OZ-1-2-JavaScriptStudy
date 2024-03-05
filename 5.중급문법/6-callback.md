
# 콜백

```javascript
const a = () => {
    console.log('A')
}
const b = () => {
    console.log('B');
}

a()     // A
b
```

함수도 하나의 데이터이다.  
소괄호를 열고 닫지 않으면 하나의 데이터이다.(b)  
소괄호를 열고 닫아야지만 함수라는 데이터를 실행한다.(a)  

그래서 b라는 함수 자체를 a에 함수를 호출할 때 인수로 넣어줄 수 있다.  
```javascript
a(b)
```
그러면 a함수가 호출될때 b라는 함수 데이터가 파라미터로 들어가게 된다.  
**이런 b함수를 콜백 함수(앞으로는 콜백이라고 하겠다.)라고 한다.**  

```javascript
const a = callback => {     // 매개 변수 하나이니까 괄호 생략
    //  이 callback 인수의 데이터는 함수이다. 
    console.log('A')    // A
    callback()          // B
}
const b = () => {
    console.log('B')
}

a(b)
```
a와 b 모두 함수이다.   
a를 실행할때 b라는 함수 자체를 파라미터로 넣어주는데,  
b 함수 데이터가 callback이라는 매개변수로 들어가고,  
콜백은 함수 데이터이므로 소괄호를 열고 닫으면 실행을 할 수 있게 된다.  

매개변수로 b를 넣은 경우는 아래와 같이 생각하자!!
```javascript
const a = b => {
    console.log('A')    // A
    b()                 // B
}
```

```javascript
const sum = (a, b) => {
    setTimeout(() => {
        return a + b
    }, 1000);
}

console.log(sum(3, 7));     // undefined
```
`setTimeout`함수는 첫 번째 인자로 콜백 함수로 받는다.  
두 번째 인자로는 시간을 받는다.(Millisecond로 1000ms가 1초)   
두 번째 인자로 받은 시간이 지나면 첫 번째 인자로 받은 콜백 함수가 실행되는 함수이다.  

다만 이렇게 실행하면 우리가 원하는 합이 반환되지 않는다.  
왜냐하면 현재 코드는 콜백 함수의 리턴인것이지 sum 함수의 리턴이 아니기 때문이다.  

이를 해결하기 위해서는 callback을 쓸 수 있다.  
```javascript
const sum = (a, b, c) => {
    setTimeout(() => {
        c(a + b)
    }, 1000);
}

sum(1, 2, (value) => {
    console.log(value);     // 3
})
```
3번째 파라미터로 들어가는 c 함수를 내부에서 실행시키는 것이다.  
c함수가 호출될때 a와 b가 더해진 값이 들어오기 때문에 c 함수는 sum함수가 호출될 때 세번째 인수로 들어간 함수이고,  
그 부분의 함수에서 value라는 값을 받아서 출력을 해보면, 1초뒤에 숫자 3이 잘 출력된다.  

이 3번째 인자로 들어오는 함수를 c에 넣으면 아래와 같다.
```javascript
const sum = (a, b, c) => {
    setTimeout(() => {
        ((value) => {
            console.log(value);
        })(a + b)
    }, 1000);
}

sum(1, 2, (value) => {
    console.log(value);     // 3
})
```
1초후에 setTimeout 내부에서 작성된 코드가 순차적으로 실행되는데,  
그 코드는 파라미터로 `a + b`를 받고 이게 argument로 둘어와 그걸 출력하는 구조이다.  


이 콜백 함수는 다른 함수가 호출될 때 그 함수 호출에 인수로 사용되는 함수를 말한다.  
함수가 하나의 데이터라는 것을 응용해서 다른 함수의 인수로 전달하면서 그것을 그 다른 함수 내부에서 호출하는 개념이라고 이해하면 된다.  
