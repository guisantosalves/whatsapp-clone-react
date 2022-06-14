import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./css/Chat.css";

function Chat() {
  const [Seed, setSeed] = useState("");

  useEffect(() => {
    //get the one to five
    const radonValue = Math.floor(Math.random() * 5);
    setSeed(radonValue);
  }, []);

  return (
    <div className="chat">
      <div className="chat__header">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}
        />

        <div className="chat__headerInfor">
          <h3>Room name</h3>
          <p>Last Seen at ..</p>
        </div>
      </div>

      <div className="chat__body"></div>

      <div className="chat__footer"></div>
    </div>
  );
}

export default Chat;
