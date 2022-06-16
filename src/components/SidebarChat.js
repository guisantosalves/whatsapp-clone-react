import { async } from "@firebase/util";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./css/SidebarChat.css";

//getting the data from firebase
import { db } from "../firebase";
import { collection, addDoc, timestamp } from "firebase/firestore";

//react router
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, id, name }) {
  const [Seed, setSeed] = useState("");

  useEffect(() => {
    //get the one to five
    const radonValue = Math.floor(Math.random() * 5);
    setSeed(radonValue);
  }, []);

  const createChat = async () => {
    //inserting on database.
    const roomName = prompt("Please enter name for chat: ");
    console.log(roomName);

    if (roomName) {
      try {
        await addDoc(collection(db, "rooms"), {
          name: roomName,
        });
      } catch (err) {
        alert(err);
      }
    }
  };

  return !addNewChat ? (
    <Link to={`/rooms/${id}`}>
      <div className="sidebarChat">
        <Avatar
          src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}
        />
        <div className="sidebarChat__info">
          <h2>{name}</h2>
          <p>Last Message</p>
        </div>
      </div>
    </Link>
  ) : (
    <div onClick={createChat} className="sidebarChat">
      <h2>Add new chat</h2>
    </div>
  );
}

export default SidebarChat;
