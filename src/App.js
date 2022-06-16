import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";
import { Routes, Route } from "react-router-dom";

//we can use react router in especific elements to do our application more scalable
function App() {
  return (
    <div className="app">
      <div className="app__body">

      <Sidebar />
        <Routes>
          <Route path="/" />
          <Route path="/rooms/:id" element={<Chat/>}/>
        </Routes>
        {/* sidebar -> 0.35 flex*/}
        

        {/* chat -> 0.65 flex*/}
        
      </div>

    </div>
  );
}

export default App;
