import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./css/SidebarChat.css"

function SidebarChat({addNewChat, id, name}){

    const [Seed, setSeed] = useState('');

    useEffect(()=>{
        //get the one to five
        const radonValue = Math.floor(Math.random()*5);
        setSeed(radonValue);
    }, []);
    
    const createChat = () => {
        const roomName = prompt("Please enter name for chat: ");
        console.log(roomName);

        if(roomName){
            //do something on database
        }
    }

    return !addNewChat ? (
        <div className="sidebarChat">
            <Avatar 
                src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}
            />
            <div className="sidebarChat__info">
                <h2>{name}</h2>
                <p>Last Message</p>
            </div>
        </div>
    ) : (
        <div onClick={createChat} className="sidebarChat">
            <h2>Add new chat</h2>
        </div>
    )
}

export default SidebarChat;