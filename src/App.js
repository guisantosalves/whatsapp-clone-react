import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Chat from "./components/Chat";

function App() {
  return (
    <div className="app">

      <div className="app__body">
        {/* sidebar -> 0.35 flex*/}
        <Sidebar />

        {/* chat -> 0.65 flex*/}
        <Chat/>
      </div>

    </div>
  );
}

export default App;
