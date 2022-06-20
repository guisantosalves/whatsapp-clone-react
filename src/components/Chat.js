import { Avatar } from "@mui/material";
import React, { useEffect, useState} from "react";
import "./css/Chat.css";
import { IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";

//react router
import { useParams } from "react-router-dom";

//database configuration
import { db } from "../firebase";
import {
  collection,
  query,
  onSnapshot,
  orderBy,
  addDoc,
} from "firebase/firestore";
import { serverTimestamp } from "firebase/firestore";

//using the datalayer
import { useStateValue } from "../StateProvider";

function Chat() {
  const [input, setInput] = useState("");

  //getting information from datalayer
  const [{ user }, dispatch] = useStateValue();

  //param passed in url
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (roomId) {
      const qu = query(collection(db, "rooms"));

      //getting the messages with url from database
      const queryMe = query(
        collection(db, `rooms/${roomId}/messages`),
        orderBy("timestamp", "asc")
      );

      onSnapshot(qu, (queryResult) => {
        queryResult.docs.map((doc) => {
          if (doc.id == roomId) {
            setRoomName(doc.data().name);
          }
        });
      });

      //tem que pegar usando a url da consulta dada no firebase
      //https://stackoverflow.com/questions/55620618/how-to-get-sub-collections-with-firebase-firestore
      onSnapshot(queryMe, (queryResult) => {
        setMessages(
          queryResult.docs.map((doc) => ({
            id: doc.id,
            data: doc.data(),
          }))
        );
      });
    }
  }, [roomId]);


  const sendMessage = async (e) => {
    e.preventDefault(); //avoiding that page reload

    try {
      await addDoc(collection(db, `rooms/${roomId}/messages`), {
        message: input,
        name: user.displayName,
        timestamp: serverTimestamp(),
      });
    } catch (err) {
      alert(err);
    }

    setInput("");
  };

  console.log()

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${Math.floor(
            Math.random() * 5
          )}.svg`}
        />

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>
            Last Seen{" "}
            {new Date(
              messages[messages.length - 1]?.data?.timestamp?.toDate()
            ).toUTCString()}
          </p>
        </div>

        <div className="chat__headerRight">
          <IconButton>
            <SearchOutlined />
          </IconButton>

          <IconButton>
            <AttachFile />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="chat__body">
        {messages.map((message) => (
          <p
            key={message.id}
            className={`chat__message ${
              !(message?.name === user?.displayName) && `chat__reciever`
            }`}
          >
            <span className="chat__name">{message.data.name}</span>
            {message.data.message}
            <span className="chat__timestamp">
              {new Date(message.data.timestamp?.toDate()).toUTCString()}
            </span>
          </p>
        ))}
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="type a message"
          />
          <button type="submit" onClick={sendMessage}>
            Send a message
          </button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
