# 백틱 문법

백틱(\`\`)을 사용하면 문자열 내에 변수나 표현식을 `${}`로 감싸 삽입할 수 있다.  
ES6부터 도입

```javascript
let name = "김길동";
let age = 20;

// 기존 문자열  연결 방법
let greeting = "안녕하세요! 저는 " + name + "입니다. 나이는 " + age + "입니다.";

// 백틱 사용법
let greetingWithBackticks = `안녕하세요! 저는 ${name}입니다. 나이는 ${age}입니다.`;

console.log(greeting);
console.log(greetingWithBackticks);
```

# toFixed
`toFixed()` 메소드는 숫자를 고정소수점 표기법으로 변환하여 문자열로 변환한다.
더 쉽게 말하면 괄호 안에 지정된 소수점 이하 자릿수를 반올림하여 문자열로 만든다.
만약, 지정된 소수점 자릿수가 원래 숫자의 소수점 자릿수보다 크면, 빈자리를 0으로 채워 넣는다.

[mdn 링크](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)

```javascript
let num = 123.456;

// 소수점 둘째자리까지 표기 (셋째자리에서 반올림)
console.log(num.toFixed(2)); // "123.46"

// 소수점 첫째자리까지 표기 (둘째자리에서 반올림)
console.log(num.toFixed(1)); // "123.5"

// 소수점 없이 표기 (첫째자리에서 반올림)
console.log(num.toFixed()); // "123"
```

이 메소드는 Number 도구 상자(객체) 안의 toFixed라는 도구(메소드)이다.
(Number, String, Array 이 모든 것들도 사실은 객체이다.
현재는 이 부분이 이해가 가지 않더라도 넘어가자.
지금은 사용법만 집중!)

즉, 숫자를 다루는 도구(메소드)라고 생각하면 된다.

참고: [숫자 객체 mdn](https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Number)
