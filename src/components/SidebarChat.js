import { Avatar } from "@mui/material";
import React, { useEffect, useState } from "react";
import "./css/SidebarChat.css"

function SidebarChat(){

    const [Seed, setSeed] = useState('');

    useEffect(()=>{
        //get the one to five
        const radonValue = Math.floor(Math.random()*5);
        setSeed(radonValue);
    }, []);
    
    return(
        <div className="sidebarChat">
            <Avatar 
                src={`https://avatars.dicebear.com/api/avataaars/${Seed}.svg`}
            />
            <div className="sidebarChat__info">
                <h2>room name</h2>
                <p>Last Message</p>
            </div>
        </div>
    )
}

export default SidebarChat;