import React, { useState } from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import Login from "./components/Login";

//react router
import { Routes, Route } from "react-router-dom";

//we can use react router in especific elements to do our application more scalable
function App() {
  const [user, setUser] = useState(null);

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
