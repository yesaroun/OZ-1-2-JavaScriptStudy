
# if 문
```javascript
if (조건) {
    // 조건이 true일 때 실행할 코드
}
```
`()`안의 조건이 true이면 `{}` 내부(scope 내부) 코드 실행하고,  
false이면 `{}` 내부 코드 무시.

#### 예
```javascript
let score = 90;
if (score > 80) {
    console.log("합격입니다.");
}
```

# if ... else 문
```javascript
if (조건) {
    // 조건이 true일 때 실행할 코드
} else {
    // 조건이 false일 때 실행할 코드
}
```
`()`안의 조건이 true이면 if 다음의 `{}` 내부 코드 실행하고,  
false이면 else 다음의 `{}` 내부 코드 실행.

#### 예
```javascript
// 예시
let score = 70;
if (score > 80) {
    console.log("합격입니다.");
} else {
    console.log("불합격입니다.");
}
```

# switch 문
```javascript
switch (표현식) {
    case 값1:
        // 표현식의 결과가 "값1"일 때 실행할 코드
        break;
    case 값2:
        // 표현식의 결과가 "값2"일 때 실행할 코드
        break;
    // 추가적인 case들...
    default:
        // 어떤 case도 일치하지 않을 때 실행할 코드
}
```

switch문은 특정 변수의 값에 따라 다양한 경우를 처리할 때 사용한다.  

#### 예
```javascript
let grade = 'A';
switch (grade) {
    case 'A':
        console.log("우수한 성적입니다.");
        break;
    case 'B':
        console.log("좋은 성적입니다.");
        break;
    case 'C':
        console.log("보통입니다.");
        break;
    case 'D':
        console.log("노력이 필요합니다.");
        break;
    default:
        console.log("성적이 유효하지 않습니다.");
}
```
