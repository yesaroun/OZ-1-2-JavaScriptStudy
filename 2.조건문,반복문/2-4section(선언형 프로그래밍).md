리액트 개발을 하다 보면 for 문이나 while 문 보다는  
Array 객체의 메서드(map, reduce, filter)를 더 자주 사용한다.

이러한 방식을 선언형 프로그래밍(Declarative Programming)이라고 하며  
리액트 개발에서는 선언형 프로그래밍 방식이 더 선호된다.  
리액트 [공식 페이지](https://ko.legacy.reactjs.org/)를 보면 선언 라이브러리라는 사실을 알 수 있다.  
그리고 이와 대비되는 개념은 명령형 프로그래밍(Imperative Programming)이라 한다.

# 반복문에서의 명령형 프로그래밍과 선언형 프로그래밍

## 명령형 프로그래밍
명령형 프로그래밍(Imperative Programming)은 기존에 일반적으로 사용되는 프로그래밍 방식이다.

```javascript
const numbers = [1, 2, 3, 4, 5];
let sum = 0;

// numbers 배열의 짝수 합
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 === 0) {
    sum += numbers[i];
  }
}
```
이처럼 합계를 구하는 코드가 어떻게 동작하는지를 작성하는 방식을 명령형 프로그래밍이라고 한다.  
이것만 보고는 명령형 프로그래밍에 대해 감이 잡히지 않을 수 있다.  
왜냐하면 명령형 프로그래밍 방식은 우리가 일반적으로 코딩하는 방식이기 때문이다.  
아래의 선언형 프로그래밍을 보면 확실하게 이해가 갈 것이다.

## 선언형 프로그래밍
선언형 프로그래밍(Declarative Programming)은 원하는 결과를 묘사하는 방식으로 코드를 작성한다.  
아래의 예제는 위에 명령형 배열의 예에서 사용했던 짝수의 합을 구하는 예제이다.

```javascript
const numbers = [1, 2, 3, 4, 5];

// 1. filter 함수로 짝수만 추출
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
const evenNumbers = numbers.filter(number => number % 2 === 0);

// 2. reduce 함수로 합산
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
const sum = evenNumbers.reduce((acc, number) => acc + number, 0);
```

위에 예제는 `filter()` 함수와 `recue()`함수를 사용해 배열의 짝수인 합을 구한다.  
여기에서 중요한 것은 어떻게 필터링하고, 어떻게 합을 구하는지가 아니라 결과를 얻는 것에 초점이 맞춰져 있다.  
이렇게 원하는 결과가 무엇인지에 초점을 맞추는 방식을 선언현 프로그래밍이라고 한다.

# UI에서의 명령형 프로그래밍과 선언형 프로그래밍
## 명령형 프로그래밍
```html
<div id="root"></div>
```
```javascript
const root = document.getElementById("root");
const $inputFiled = document.createElement("input");
const $submitBtn = document.createElement("button");

$submitBtn.textContent = "Send";
$submitBtn.disabled = true;

root.appendChild($inputFiled);
root.appendChild($submitBtn);

$inputFiled.addEventListener("input", (event) => {
  const inputValue = event.target.value;
  $submitBtn.disabled = inputValue.trim().length === 0;
});

$submitBtn.addEventListener("click", () => {
  $inputFiled.value = "";
  $submitBtn.disabled = true;
});
```

이처럼 명령형 프로그래밍은  
DOM 트리의 요소 생성, 속성 설정, 이벤트 추가 등의 단계를  
순차적인 명령으로 수행한다.

그리고 상태(state)는 직접 명령(`$submitBtn.disabled = true;`)을 통해 변경한다.  
만약 입력한 값을 지우려면,  
즉, 상태를 변경하려면 해당 명령을 직접 해야 한다.  
이처럼 상태 변경을 매우 직관적으로 수행한다.

## 선언형 프로그래밍
```jsx
function Form() {
  const [inputValue, setInputValue] = useState("");
  
  const handleChange = ((e) => {
    setInputValue(e.target.value);
  });
  
  const handleClick = (() => {
    setInputValue("");
  })
  
  const isButtonDisabled = inputValue.trim().length === 0;
  
  return (
    <div>
      <input type="text" value={inputValue} onChange={handleChange} />
      <button disabled={isButtonDisabled} onClick={handleClick} >
        Send
      </button>
    </div>
  )
}
```

이처럼 선언형 프로그래밍은  
DOM 트리에 태그를 직접 명령하여 생성하는 방식이 아닌  
선언만 하면(`return ()`) 나머지는 리액트가 알아서 처리하는 방식이다.

또한, `text = 123`처럼 명령형으로 값을 직접 변경할 수 없다.  
`setText()` 함수를 호출해 내부에서 처리한 후  
리액트가 컴포넌트에 다시 렌더링하는 방식이다.

이러한 선언형 프로그래밍은 코드는 간결하며 가독성을 높여준다.    
그리고 선언현 프로그래밍은 추상화를 가능하게 하며 이 때문에 재사용성이 높은 특징을 갖게 된다.

<br>
<hr>

#### 참고) 추상화란 
추상화란 복잡한 것을 간단하게 보여주는 것을 말한다.  
예를 들어 '자동차의 엑셀을 밞으면 자동차가 앞으로 간다' 처럼,  
사실 내부에서는 엔진 동작이나, 기어 등 복잡한 로직들이 구현되어 있지만, 엑셀만 밟으면 앞으로 간다로 필요한 부분만 추출해서 간단하게 만드는 것을 추상화라고 한다.

이런 추상화는 코드의 재사용성을 높여주는데,  
만약 '엑셀을 밞으면 앞으로 간다.'를 함수로 정의했다고 하면  
버스의 '엑셀을 밞으면 앞으로 간다.'  
승용차의 '엑셀을 밟으면 앞으로 간다.'  
처럼 필요할 때 '엑셀을 밞으면 앞으로 간다.' 함수만 가져와서 사용하면 되기에  
하나의 함수를 다시 사용할 수 있다.  
이를 재사용성을 높여 준다고 한다.
