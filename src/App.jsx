import React from "react";
import { BrowserRouter as Router, Routes,Route } from "react-router-dom";
import Home from "./Pages/Home";
import Gizi from "./Pages/Gizi";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/Gizi" element={<Gizi/>}/>
      </Routes>
    </Router>
  );
}

export default App;

