import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import React from "react";
import Alert from "./components/Alert";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./context/notes/NoteState";
import Signup from "./components/Signup";
import Login from "./components/Login";
function App() {
  const [alert,setAlert]=useState(null);
  const showAlert = (message, type)=>{
    setAlert({
      msg: message,
      type: type
    })
    setTimeout(() => {
        setAlert(null);
    }, 1500);
}
  return (
    <>
      <NoteState>
        <Router>
          <Navbar></Navbar>
          <Alert alert={alert}></Alert>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert}/>} />
              <Route path="/home" element={<Home />}/>
              <Route path="about/*" element={<About />} />
              <Route path="/login" element={<Login showAlert={showAlert}/>} />
              <Route path="/signup" element={<Signup showAlert={showAlert}/>}/>
            </Routes>
          </div>
        </Router>
      </NoteState>
    </>
  );
}

export default App;
