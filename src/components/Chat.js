import { Avatar } from "@mui/material";
import React, { useEffect, useState, u } from "react";
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
import { collection, query, onSnapshot, where } from "firebase/firestore";

function Chat() {
  const [input, setInput] = useState("");

  //param passed in url
  const { roomId } = useParams();
  const [roomName, setRoomName] = useState("");

  useEffect(() => {
    if (roomId) {
      const qu = query(collection(db, "rooms"));

      onSnapshot(qu, (queryResult) => {

        queryResult.docs.map((doc) => {

          if(doc.id == roomId){

            setRoomName(doc.data().name);

          }

        });

      });
    }
  }, [roomId]);


  const sendMessage = (e) => {
    e.preventDefault(); //avoiding that page reload
    console.log(`going to databas: ${input}`);

    setInput("");
  };

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${Math.floor(Math.random() * 5)}.svg`}
        />

        <div className="chat__headerInfo">
          <h3>{roomName}</h3>
          <p>Last Seen at ..</p>
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
        <p className={`chat__message ${true && `chat__reciever`}`}>
          <span className="chat__name">Guizaodozap</span>
          eaeae
          <span className="chat__timestamp">3:52pm</span>
        </p>
      </div>

      <div className="chat__footer">
        <InsertEmoticon />
        <form>
          <input
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
