import React from "react";
import "./input.css";
import Home from "./routes/Home";
import Placetostay from "./routes/Placetostay";
import { Route, Routes} from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/placetostay" element={<Placetostay/>} />
      </Routes>
    </>
  );
}
export default App;