import { useState, useEffect } from "react";
import io from "socket.io-client";

import "./App.css";

const socket = io.connect("localhost:3001");
function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  function sendMessage() {
    const newMessage = { text: message, type: "sent" };
    socket.emit("send_message", newMessage);
    setMessages((prevMessages) => [...prevMessages, newMessage]);
  }

  useEffect(() => {
    socket.on("receive_message", (msg) => {
      const newMessage = { text: msg.text, type: "received" };
      setMessages((prevMessages) => [...prevMessages, newMessage]);
    });
  }, [socket]);

  return (
    <div className="chat-box">
      <div className="messages-container">
        {messages.map((msg, index) => (
          <div className={msg.type} key={index}>
            <p>{msg.text}</p>
          </div>
        ))}
      </div>
      <div className="send">
        <input onChange={(e) => setMessage(e.target.value)} type="text" />
        <button onClick={sendMessage}>Send</button>
      </div>
    </div>
  );
}

export default App;
