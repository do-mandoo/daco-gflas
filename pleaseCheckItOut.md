# 서버 주소 바꾸는 곳
- `package.json` 파일의 59번째 줄
  ```js
  "proxy":"http://34.64.207.232:5000"
  ```
- `src폴더 -> api폴더 -> clients.js` 파일의 3번째 줄
  ```js 
  baseURL: 'http://34.64.207.232:5000'
  ```

# build 하기
- 터미널창에서 `npm run build` 입력






