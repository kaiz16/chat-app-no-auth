# API

https://gg-chat-app-api.herokuapp.com/

Examples below

Get all messages(GET)

> `https://gg-chat-app-api.herokuapp.com/messages`

Send a new message(POST)

> `https://gg-chat-app-api.herokuapp.com/messages/create`

Examples using fetch

Get messages

```javascript
var url = "https://gg-chat-app-api.herokuapp.com/messages";

fetch(url, {
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

Create new message

```javascript
var url = "https://gg-chat-app-api.herokuapp.com/messages/create";

fetch(url, {
  method: "POST",
  body: JSON.stringify({
    username: "foo",
    message: "Hello world",
  }),
  headers: {
    "Content-type": "application/json",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
```

You need socket.io for subscriptions to work (Instant messaging)

Socket.io (For live subscriptions)  
https://socket.io/

Emit an event to the server after sending new message

```javascript
let message = {
  username: "foo",
  message: "Hello world",
};

socket.emit("newMessage", message);
```

Client connected to the same server can catch that event and receive an instant message
```javascript
socket.on("incomingNewMessage", (message) => {
  this.messages.push(message);
});
```
