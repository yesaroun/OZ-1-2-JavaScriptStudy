
# 모듈(module)

개발하는 애플리케이션의 규모가 커지면 하나의 파일에 모든 코드를 담을 수 없다.  
그래서 각각의 역할에 따라서 파일을 분리해야한다.  
이렇게 분리했지만 다른 파일에서 작성한 변수, 함수, 객체 등을 현재 파일에서 사용하고 싶을때  
모듈이라는 개념을 사용해 변수, 함수, 객체 등을 내보내거나 불러올 수 있다.  

## 환경에 따른 모듈 사용법
### html에서 모듈 문법  
script 태그를 사용해 모듈이 사용된 코드를 불러올때  
`<script src="htmlA.js" type="module"></script>` 이처럼 type을 module로 지정해야 한다.

### Node.js 환경에서 모듈 문법
모듈 문법을 사용하는 파일의 확장자를 `.mjs`로 지정해야 한다.

## export
`export`는 변수, 객체, 함수 등을 다른 파일에서 사용 가능하도록 내보낼 때 사용한다.

### named export
named export는 하나의 파일에서 여러 함수와 변수를 export 하고 싶을때 사용한다.  
export 하고 싶은 것 앞에 `export`를 사용하면 된다.   
`const`, `let`, `function`, `class` 등 다양하게 선언한 것들을 모두 export할 수 있다.

```javascript
export const PI = 3.14;

export function add(a, b) { 
  return a + b;
}

export function subtract(a, b) { 
  return a - b;
}
```

### default export
defalt export는 파일에서 하나의 메인 함수나 변수를 export 하고 싶을때 `default export` 키워드와 함께 사용한다.    
**`default export`는 파일당 한 번만 할 수 있다!!**

```javascript
const PI = 3.14;

function add(a, b) { 
  return a + b;
}

function subtract(a, b) { 
  return a - b;
}

const calculator = {
  PI,
  add,
  subtract,
}

export default calculator;
```

다만, `fuction`과 `class`는 선언과 동시에 `export default` 키워드를 사용할수 있지만,  
`const`, `let`은 선언 이후에 `export default`를 해야 한다.

```javascript
// const
const foo = 1;
export default foo;
```

```javascript
// let
let foo = 1;
export default foo;
```

```javascript
// function
export default function foo() {}
```

```javascript
// class
export default class Foo {}
```

## import 
export한 변수, 객체, 함수, 클래스 등을 현재 파일로 가져오고 싶을때 사용한다.  
**named export 한 것은 named import로 가져오고!!**  
**default export 할 것은 default import로 가져온다!!**  
즉, export한 파일 기준으로 import한다!

### named import

namedExportCalculator.js
```javascript
export const PI = 3.14;

export function add(a, b) { 
  return a + b;
}

export function subtract(a, b) { 
  return a - b;
}
```
다른 파일에서 위 코드처럼 export한 경우 아래의 코드처럼 import 할 수 있다.

namedImportMain.js

```javascript
import {PI, add, subtract} from './namedExportCalculator.js';

console.log(PI);
console.log(add(1, 2));
console.log(subtract(1, 2));
```

### default import 
defaultExportCalculator.js
```javascript
const PI = 3.14;

function add(a, b) { 
  return a + b;
}

function subtract(a, b) { 
  return a - b;
}

const calculator = {
  PI,
  add,
  subtract,
}

export default calculator;
```

defaultImportMain.js
```javascript
import calculator from './defaultExportCalculator.js';

console.log(calculator.PI);
console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
```

앞에서 말했든 하나의 파일은 하나의 `export default`만 사용 가능하다!!  
다만, `export default`와 `export`는 함께 사용 가능하다.  

exportCalculator.js
```javascript
export const PI = 3.14;

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

const calculator = {
  add,
  subtract,
}

export default calculator;
```

importMain.js
```javascript
import calculator, {PI} from "./exportCalculator.js";

console.log(PI)
console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
```

참고로 리액트에서는   
컴포넌트의 경우 하나의 파일에 하나의 컴포넌트를 다루니까  
`export default`를 사용하는 `default export` 방식과 `default import` 방식을 사용한다.  

하나의 파일에 여러 function을 다루는 api나 interface, type 등은  
`named export`와 `named import` 방식을 사용한다.  

종종 몇몇 라이브러리를 사용할때 혼합된 방식으로 import하기도 한다.

## 추가적인 방식

### as
`as`를 사용하면 `naemd import`를 할때 이름을 바꿀 수 있다.

```javascript
export const PI = 3.14;

export function add(a, b) {
  return a + b;
}
```

```javascript
import { add as addNumbers } from './calculator.js';

console.log(addNumbers(1, 2));
```

이러한 방식은 import하는 변수나 함수의 이름을 조금더 구체적으로 명시하고 싶을때 사용하거나,  
다른 파일에서 import 하지만, 동일한 이름을 가지고 있는 경우 사용한다.  

### *
`*`을 사용해 `named export`되는 모든 것들을 한번에 import 할 수 있다.

```javascript
export const PI = 3.14;

export function add(a, b) { 
  return a + b;
}

export function subtract(a, b) { 
  return a - b;
}
```

```javascript
import * as calculator from './namedExportCalculator.js';

console.log(calculator.PI);
console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
```

이러한 방식은 모든 모듈을 import 하므로 현재 파일에서 import 하는 변수, 함수가 무엇인지 파악하기 어렵다.  
그래서 권장하지 않는 방식이다.   

# require, exports

앞에서 설명한 `import`, `export` 방식은 ES Module 방식이라고 한다.  
다만, 종종 `require`, `exports`를 통한 import, export 방식을 보는 경우도 있다.  
이러한 방식은 CommonJS Module방식이라고 한다.  
CommonJS 방식은 Nodejs 초창기에 나온 방식으로 리액트에서는 ES Module 방식을 사용한다.  
하지만 라이브러리 코드에서 CommonJS방식의 코드를 볼 수도 있으니 알고는 있어야 한다.

```javascript
exports.PI = 3.14;

exports.add = function(a, b) {
  return a + b;
};

exports.subtract = function(a, b) {
  return a - b;
};
```

```javascript
const calculator = require("./namedExportCalculator.js");

console.log(calculator.PI);
console.log(calculator.add(1, 2));
console.log(calculator.subtract(1, 2));
```


