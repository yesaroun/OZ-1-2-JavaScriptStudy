# this 
일반(Normal) 함수는 호출 위치에 따라서 this 정의!  
화살표(Arrow) 함수는 자신이 선언된 함수 범위에서 this 정의!  

```javascript
const kimInfo = {
    name: 'kim',
    normal: function () {  
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}
kimInfo.normal()     // kim
kimInfo.arrow()      // undefined
```
기본적인 로직은 똑같지만 함수의 형태에 따라서 결과가 다르다.

normal부분의 함수는 호출 위치에 따라서 정의 된다.  
즉, normal이라는 함수를 정의 내린 곳은 호출 위치가 어디인지 알 수 없기 때문에 this가 무엇을 가리키는지 정확하게 알 수 없다.  
근데 `kimInfo.normal()`이 호출 위치에서 앞에 있는 객체 데이터는 kimInfo이고 그게 this가 되는 것이다. 그래서 this.name은 kim 이다. 

화살표 함수의 경우에는 자신이 선언된 함수 범위라고 했는데,  
이 화살표 함수가 자신이 선언된 범위가 존재하고 그 범위 외부의 함수가 보이지 않는다.  
그래서 현재 코드에서 화살표 함수 내부에서의 this는 정확하게 무엇인지 알 수가 없다.  
그래서 undefined가 나온다.  
즉, arrow() 메소드는 호출 위치랑 전혀 상관없이 선언될때 this가 무엇인지 알 수 있다.  

```javascript
const kimInfo = {
    name: 'kim',
    normal: function () {  
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}
kimInfo.normal()     // kim
kimInfo.arrow()      // undefined

const parkInfo = {
    name: 'park',
    normal: kimInfo.normal,
    arrow: kimInfo.arrow
}
parkInfo.normal()        // park
parkInfo.arrow()         // undefined
```
kimInfo의 normal과 arrow 함수를 할당했다.(괄호가 없으니까 호출이 아니라 할당)   

여기서 알 수 있는 점은 normal의 this는 호출 위치에 따라서 달라진다는 점이다.  

## prototype에서의 this
```javascript
function User(name) {  
    this.name = name
}
User.prototype.normal = function () {  
    console.log(this.name)
}
User.prototype.arrow = () => {
    console.log(this.name);
}

const kimInfo = new User('kim')
const parkInfo = new User('park')

kimInfo.normal()     // kim
kimInfo.arrow()      // undefined
```

normal의 this는 호출 위치에 따라서 실행이 되니까, `kimInfo.normal`이 실행되는 위치에 연결되어있는 객체(kimInfo)가 this이다.  

화살표 함수가 선언된 그 영역의 함수 범위를 this로 참조하는 것인데,  
지금 이 영역 자체에 따로 함수가 보이지 않는다. 그래서 undefined가 출력된다.  

## 화살표 함수에서의 this

```javascript
const timer = {
    name: 'kim!!',
    timeout: function () {  
        // setTimeout(함수, 시간)
        setTimeout(function () {
            console.log(this.name);
        }, 2000);
    }
}
timer.timeout()     // undefined
```
setTimeout함수는 콜백함수와 시간을 인수로 받는다. 시간은 ms 단위로 특정 시간이 되면 콜백 함수를 실행하는 구조이다.  

여기서의 this는 일반 함수에서 만들어져있으니까 이걸 호출하는 위치가 중요하다.  
그래서 setTimeout()함수의 로직 어딘가에서 정의된 this를 찾으려 할 것이다.  
하지만 우리는 timer의 name을 가져오고 싶은 것이다.  
그래서 일반함수는 적합하지 않다.  

```javascript
const timer = {
    name: 'kim!!',
    timeout: function () {  
        // setTimeout(함수, 시간)
        setTimeout(() => {
            console.log(this.name);
        }, 2000);
    }
}
timer.timeout()     // kim!!
```

이처럼 화살표 함수가 this를 정의할 때는 이 화살표 함수 자신이 만들어진 함수 범위(timeout: function 이 함수)에서 정의되기 때문에  
그 함수 범위에서 this가 정의 되는 것이고,  
그 함수 부분(timeout: function)에서의 this는 일반 함수가 정의된 timer라는 객체 데이터를 기리키기 때문에 this는 timer가 된다.  

그래서 setTimeout SetInterval과 같은 timer 함수를 사용할때는 callback으로 일반 함수보다는 화살표 함수로 쓰는게 더 활용도가 높다.  


https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Operators/this
