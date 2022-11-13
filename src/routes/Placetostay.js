import React from "react";
import "../input.css";
import Navbar from "../components/Navbar";
import Secondpage from "../components/Secondpage";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar/>
        <Secondpage/>
        <Footer/>
    </div>
  );
};

export default Home;