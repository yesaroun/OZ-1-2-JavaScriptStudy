# for 문

```javascript
for (초기화식; 조건식; 증감식) {
    // 반복 실행할 코드
}
```

#### 예
1부터 5까지의 합

```javascript
let sum = 0;

for (let i = 1; i < 6; i++) {
  sum += i;
}
console.log("1부터 5까지의 합: ", sum);
```

# while 문, do ... while 문

for문은 반복 횟수가 기준이다.
while문은 조건이 기준이다.

### while 문
```javascript
while (조건식) {
    // 반복 실행할 코드
}
```

#### 예제
```javascript
let sum = 0;
let i = 1; 

while (i < 6) { 
  sum += i;
  i++; 
}
console.log("1부터 5까지의 합: ", sum);
```

### do ... while 문
```javascript
do {
    // 반복 실행할 코드
} while (조건식);
```

#### 위 예시와 동일한 예제
```javascript
let sum = 0;
let i = 1; 

do {
  sum += i;
  i++; 
} while (i < 6); 
console.log("1부터 5까지의 합: ", sum);
```

#### 예제
while 문은 조건을 먼저 확인한다.  
do ... while 문은 코드를 실행한 후 조건을 확인한다.  
그래서 최소 한 번은 코드가 실행된 후에 조건을 확인해야 하는 경우 사용하면 좋다.  
다만, 많이 사용할 일이 없다.
```javascript
do {
    let menu = Number(prompt("메뉴를 선택하세요 (1: 게임 시작, 2: 랭킹 보기, 3: 종료): "));

    switch (menu) {
        case 1:
            console.log("게임을 시작합니다.");
            break;
        case 2:
            console.log("랭킹을 보여줍니다.");
            break;
        case 3:
            console.log("프로그램을 종료합니다.");
            break;
        default:
            console.log("잘못된 선택입니다. 다시 선택해주세요.");
            break;
    }
} while (menu !== 3);
```

사실 실무에서 프론트 개발을 할때 `for`, `while`문 보다는  
간결하게 작성 가능한 `map`, `reduce`, `filter`를 더 자주 사용한다.  
위 메서드들은 배열을 다룰때 다뤄보겠다.  

그럼에도 모든 개발의 근간은 for, while 문이기에 이를 기본적으로 잘 다룰 줄 알아야 한다.
