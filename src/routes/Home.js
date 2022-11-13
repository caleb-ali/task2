import React from "react";
import "../input.css";
import Navbar from "../components/Navbar";
import Firstpage from "../components/Firstpage";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div>
        <Navbar/>
        <Firstpage/>
        <Footer/>
    </div>
  );
};

export default Home;