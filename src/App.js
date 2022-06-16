import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

//react router
import { Routes, Route } from "react-router-dom";

//using dataLayer
import {useStateValue} from "./StateProvider";

//we can use react router in especific elements to do our application more scalable
function App() {
  
  //getting the information from datalayer
  const [{user}, dispatch] = useStateValue();

  return (
    <div className="app">
      {!user ? (

        <Login />

      ) : (

        <div className="app__body">

          <Sidebar />
          <Routes>
            <Route path="/" />
            <Route path="/rooms/:roomId" element={<Chat />} />
          </Routes>

        </div>

      )}
    </div>
  );
}

export default App;
