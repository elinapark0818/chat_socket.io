# chat_socket.io

# 사용 스택

- Node.js
- express
- socket.io
- moment
- DOM
- ngrok

# 기능

1.  실시간 메시지전송 및 확인
2.  사용자이름에 따라 send, receive 처리
3.  전송버튼 클릭 && 'Enter'
4.  스크롤 처리
5.  메시지 전송 시간 출력

### ngrok

설치 : `sudo snap install ngrok`
실행 : `ngrok http 5000`

### moment

사용 : `moment(new Date()).format("HH:mm A")`

### DOM

- `document.querySelector`
- `addEventListener` "click", "keypress"
- `document.createElement`

### express

- `const express = require("express")`
- `const app = express()`
- `app.use(express.static(path.join(__dirname, "src")))`

### socket.io

- `const server = http.createServer(app)`
- `const io = socketIO(server)`
- `const socketIO = require("socket.io")`
- `const socket = io()`
- `io.on("connection", (socket) => {})`
- `socket.emit("chatting", param)`

### etc

- `scrollTo(0, displayContainer.scrollHeight)`
- `classList.add()`
- `classList.appendChild()`
- `innerHTML`
