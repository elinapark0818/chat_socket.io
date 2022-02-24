"use strict";

const socket = io();
// * 연결확인
console.log(socket);

const nickname = document.querySelector("#nickname");
const chatList = document.querySelector(".chatting-list");
const chatInput = document.querySelector(".chatting-input");
const sendBtn = document.querySelector(".send-btn");
// * 스크롤 처리
const displayContainer = document.querySelector(".display-container");

function send() {
  const param = {
    name: nickname.value,
    msg: chatInput.value,
  };
  socket.emit("chatting", param);
}
sendBtn.addEventListener("click", send);
// * 엔터 전송처리
chatInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    send();
    chatInput.value = "";
  }
});

socket.on("chatting", (data) => {
  // const li = document.createElement("li");
  // li.innerText = `${data.name}님이 - ${data.msg}`;
  // chatList.appendChild(li);
  // console.log(data);
  const { name, msg, time } = data;
  const item = new LiModel(name, msg, time);
  item.makeLi();
  // * 스크롤처리
  displayContainer.scrollTo(0, displayContainer.scrollHeight);
});

function LiModel(name, msg, time) {
  this.name = name;
  this.msg = msg;
  this.time = time;

  this.makeLi = () => {
    const li = document.createElement("li");

    li.classList.add(nickname.value === this.name ? "sent" : "received");

    const dom = `<span class="profile">
    <span class="user">${this.name}</span>
    <img
      class="image"
      src="https://placeimg.com/200/50/any"
      alt="any"
    />
  </span>
  <span class="message">${this.msg}</span>
  <span class="time">${this.time}</span>`;
    li.innerHTML = dom;
    chatList.appendChild(li);
  };
}
