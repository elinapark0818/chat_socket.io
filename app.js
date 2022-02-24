const express = require("express");
const http = require("http");
const app = express();
const path = require("path");
const server = http.createServer(app);
// console.log(__dirname);
const socketIO = require("socket.io");
const io = socketIO(server);

const moment = require("moment");

app.use(express.static(path.join(__dirname, "src")));

io.on("connection", (socket) => {
  socket.on("chatting", (data) => {
    // console.log(data);
    const { name, msg } = data;
    io.emit("chatting", {
      name,
      msg,
      time: moment(new Date()).format("HH:mm A"),
    });
  });
});

const PORT = process.env.PORT || 5000;
server.listen(PORT, () => {
  console.log(`Server is Running ${PORT}`);
});
