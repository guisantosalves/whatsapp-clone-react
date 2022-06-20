import { async } from "@firebase/util";
import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./css/SidebarChat.css";

//getting the data from firebase
import { db } from "../firebase";
import {
  collection,
  addDoc,
  timestamp,
  query,
  orderBy,
  onSnapshot,
} from "firebase/firestore";

//react router
import { Link } from "react-router-dom";

function SidebarChat({ addNewChat, id, name }) {
  const [Seed, setSeed] = useState("");
  const [messages, setMessages] = useState([]);

  //random number
  useEffect(() => {
    //get the one to five
    const radonValue = Math.floor(Math.random() * 5);
    setSeed(radonValue);
  }, []);

  //get the last message
  useEffect(() => {
    if (id) {
      const qu = query(
        collection(db, `rooms/${id}/messages`),
        orderBy("timestamp", "desc") //the last msg msg
      );

      onSnapshot(qu, (queryResult)=>{
        
        setMessages(queryResult.docs.map((doc)=>({

          data: doc.data(),

        })))
      })

    }
  }, [id]);

  const createChat = async () => {
    //inserting on database.
    const roomName = prompt("Please enter name for chat: ");

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
          <p>{messages[0]?.data.message}</p>
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
