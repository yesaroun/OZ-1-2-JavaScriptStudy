
## npm install

패키지를 설치할때 사용하는 명령어이다.  

```shell
npm install 패키지명

# 간단하게 작성
npm i 패키지명

# 특정 버전을 @ 뒤에 지정할 수도 있다.
npm install 패키지명@1.0.4

# --global을 사용해 전역에 패키지를 설치할 수도 있다.
npm install 패키지명 --global

# --save-dev(-D)를 사용해 개발환경에서만 설치할 수 있다.
# 즉 배포할때는 필요하지 않는 툴을 설치할때 사용
# 예를 들어 redux-devtools, react-query-devtools, jest
npm install 패키지명 --save_dev
```

## npm list
현재 설치된 패키지 목록을 보여주는 명령어이다.

```shell
npm list

# 간단하게 작성
npm ls

# -g 옵션을 사용해 전역 설치된 패키지 목록 확인 가능
npm list -g
```

## npm update
패키지를 가장 최신 버전으로 업데이트 하는 명령어이다.

```shell
# 모든 패키지 업데이트
npm update

# 간단하게 작성
npm up

# 특정 패키지 업데이트
npm update 패키지명

# 전역 모든 패키지 업데이트
npm update -g

# 전역 특정 페키지 업데이트
npm update -g 패키지명
```

## npm uninstall
패키지 제거하는 명령어이다.

```shell
# 특정 패키지 제거
npm uninstall 패키지명

# 간단하게 작성
npm un 패키지명

# 전역 패키지 제거
npm uninstall -g 패키지명
```

