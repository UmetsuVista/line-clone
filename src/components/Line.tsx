import React, { useEffect, useState } from "react";
import SignOut from "./SignOut";
import { auth, db } from "../firebase";
import { Message } from "../collections/message";
import "firebase/compat/firestore";
import SendMessage from "./SendMessage";

function Line() {
  const [messages, setMessages] = useState<Message[]>();
  useEffect(() => {
    db.collection("messages")
      .orderBy("createdAt")
      .limit(50)
      .onSnapshot((snapShot) => {
        const messages: Message[] = snapShot.docs.map(
          (doc) => doc.data() as Message
        );
        setMessages(messages);
      });
  }, []);
  return (
    <div>
      <SignOut />
      <div className="msgs">
        {messages?.map((message, index) => (
          <div>
            <div
              key={index}
              className={`msg ${
                message.uid === auth.currentUser?.uid ? "sent" : "received"
              }`}
            >
              <img src={message.photoURL} alt={message.uid} />
              <p>{message.text}</p>
            </div>
          </div>
        ))}
      </div>

      <SendMessage />
    </div>
  );
}

export default Line;
