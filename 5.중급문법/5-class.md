
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

kimInfo.normal()
kimInfo.arrow()
```

객체 데이터 내부에서 일반함수를 사용할때는 이렇게 normal 부분에서 뒤쪽에 있는 콜론(`:`)기호와 함께 function이라는 키워드를 생략해줄 수 있다.(프로퍼티표기법에서 더 다룰 예정)  

```javascript
const kimInfo = {
    name: 'kim',
    normal() {
        console.log(this.name)
    },
    arrow: () => {
        console.log(this.name)
    }
}

kimInfo.normal()
kimInfo.arrow()
```

이렇게 사용 가능하다.  
ES6 클래스 패턴에 대해서 살펴볼 때, 어떤 이름(normal)이 나오고 바로 소괄호와 함께 중괄호가 나오면 function 키워드를 사용하는 일반 함수로 만들어진 개념과 동일하다고 이해하면 된다.  



```javascript
function User(first, second) {
    this.age = first
    this.name = second
}
User.prototype.getFullInfo = function () {
    return `${this.age} ${this.name}`
}

const kimInfo = new User(26, 'kim')
const parkInfo = new User(34, 'park')
const leeInfo = new User(50, 'lee')

console.log(kimInfo)
console.log(parkInfo.getFullInfo())
console.log(leeInfo.getFullInfo())
```

이러한 생성자 함수를 JS에서 지원하는 class 키워드를 통해 새로운 문법으로 갱신해보겠다.  

JS는 원래 프로토타입 기반 프로그래밍 언어인데 좀 더 안정적인 다른 객체지향 프로그래밍 언어들의 영향을 받아서,  
클래스라는 개념을 흉내내서 새로운 문법을 ES6에서 제공하기 시작했다.  

```javascript
class User {
    // constructor라는 내부 함수는 first, second를 매개변수로 받아서 사용할 수 있다. 
    // 참고로 아래 함수는 constructor: function () {} 이게 간소화 된것이라고 생각하면 된다.
    constructor (first, second) {
        this.age = first
        this.name = second
    }
    // 별도로 prototype이라는 속성을 사용하지 않아도 
    // 바로 프로토 타입으로 만들어지는 메소드가 아래처럼 정의될 수 있다. 
    getFullInfo() {
        return `${this.age} ${this.name}`
    }
}

const kimInfo = new User(26, 'kim')
const parkInfo = new User(34, 'park')
const leeInfo = new User(50, 'lee')

console.log(kimInfo)
console.log(parkInfo.getFullInfo())
console.log(leeInfo.getFullInfo())
```

최근에는 prototype보다는 이렇게 클래스 키워드를 사용해서 생성자 문법을 많이 사용한다.

