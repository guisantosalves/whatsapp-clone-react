import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./css/Chat.css";
import { IconButton } from "@mui/material";
import {
  AttachFile,
  InsertEmoticon,
  Mic,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";

function Chat() {
  const [Seed, setSeed] = useState("");
  const [input, setInput] = useState("");

  useEffect(() => {
    //get the one to five
    const radonValue = Math.floor(Math.random() * 5);
    setSeed(radonValue);
  }, []);

  const sendMessage = (e) => {
    e.preventDefault(); //avoiding that page reload
    console.log(`going to database: ${input}`)
  }

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}
        />

        <div className="chat__headerInfo">
          <h3>Room name</h3>
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
          <input onChange={(e)=>setInput(e.target.value)} type="text" placeholder="type a message" />
          <button type="submit" onClick={sendMessage}>Send a message</button>
        </form>
        <Mic />
      </div>
    </div>
  );
}

export default Chat;
