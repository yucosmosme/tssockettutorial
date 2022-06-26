$ npm i -g typescript
$ npm init
$ npm i @types/node --> http 임포트 가능
$ npm i socket.io@2.3.0
$ npm i @types/socket.io@2.1.4 ---> socket.io의 타입을 명시해줌

<!-- server.ts파일을 컴파일한 결과물 js 파일을 dist 폴더로 출력해줌   -->
<!-- $ tsc src/server/server.ts --outDir dist/server/ --esModuleInterop true -->

<!-- 아래와 같이 컴파일된 js 파일을 실행 -->
<!-- $ node dist/server/server.js -->


<!-- 위와 같이 터미널에서 하지 않고 tsconfig.json 폴더 생성, 컴파일 옵션 지정 -->
<!-- 아래와 같이 명령 입력시 컴파일된 js파일 생성됨 -->
<!-- -p는 project모드. 뒤에 나오는 폴더 경로에 있는 tsconfig.json 파일을 찾아서 컴파일해준다. -->
<!-- w는 watch 모드. 코드 변경되면 재컴파일 -->
<!-- $ tsc -p src/server -w -->

<!-- % 컴파일된 js 파일을 실행하면 서버가 돈다. -->
<!-- $ node dist/server/server.js -->


<!-- 위에 watch모드는 원본 ts파일변경만 감지하여 컴파일을 다시 해줄뿐이라 컴파일된 js파일이 변경되면 자동 재시작해주는 nodemon 설치 -->
<!-- 개발환경에서만 필요하므로 --save-dev로 설치하여 devDependencies에만 저장시키고 -->
<!-- 새로운 환경에서 npm i 할때에도 배포환경이면 npm install --only=prod 개발환경이면 npm install --only=dev 이렇게 나눠서 설치한다. -->
$ npm i --save-dev nodemon

% 이제 node가 아닌 nodemon으로 서버를 돌린다.
<!-- $ nodemon dist/server/server.js -->

<!-- 이 상황대로면 tsc에서 자동컴파일 시키고, nodemon에서 자동 서버재시작 시키는 두가지를 따로따로 동시에 하므로 -->
<!-- 한꺼번에 실행가능하게 해주는 concurrently 다운로드 -->
$ npm i --save-dev concurrently

%  package에 scrpit에 추가
"dev" : "concurrently -k \"tsc -p ./src/server -w\" \"nodemon ./dist/server/server.js\"",

$ npm run dev


===========================

<!-- ./dist/client에 생성한 index.html와 서버를 연결시켜주기 위해 express 다운 -->
npm install express@4
npm install @types/express@4 --save-dev