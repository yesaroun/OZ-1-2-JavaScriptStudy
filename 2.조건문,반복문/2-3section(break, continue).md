# break 문

반복문의 흐름에서 바로 빠져나올 때 사용한다.
- 멈춘다 + 빠져나간다.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
/*
1
2
3
4
*/
```

# continue 문
실행하던 반복 문을 건너뛰고 반복문의 맨 앞으로 되돌아간다.
- 뒷 부분은 무시한다 + 계속한다.

```javascript
for (let i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
/*
1
2
3
4
6
7
8
9
10
*/
```
5를 출력하지 않는다!!

사실 이 break와 continue 문도 리액트를 사용하면서 
