import React, { useEffect, useState } from "react";
import "./css/Sidebar.css";
import { Avatar, IconButton } from "@mui/material";
import {
  Chat,
  DonutLarge,
  MoreVert,
  SearchOutlined,
} from "@mui/icons-material";
import SidebarChat from "./SidebarChat";

// firebase configuration
import { db } from "../firebase";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";

function Sidebar() {
  const [rooms, setRooms] = useState([]);

  useEffect(() => {
    const qu = query(collection(db, "rooms"));

    onSnapshot(qu, (queryResult) => {
      setRooms(
        queryResult.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });

    return () => {
      qu();
    };

  }, []);

  console.log(rooms);

  return (
    <div className="sidebar">
      <div className="sidebar__header">
        <Avatar />
        <div className="sidebar__headerRight">
          <IconButton>
            <DonutLarge />
          </IconButton>

          <IconButton>
            <Chat />
          </IconButton>

          <IconButton>
            <MoreVert />
          </IconButton>
        </div>
      </div>

      <div className="sidebar__search">
        <div className="sidebar__searchContainer">
          <SearchOutlined />
          <input placeholder="Search or start a new chat" type="text" />
        </div>
      </div>

      <div className="sidebar__chats">
        <SidebarChat addNewChat />
        {rooms.map((room)=>(
          <SidebarChat key={room.id} id={room.id} name={room.data.name}/>
        ))}
      </div>
    </div>
  );
}

export default Sidebar;
