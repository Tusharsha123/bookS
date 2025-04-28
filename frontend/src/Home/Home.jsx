import React from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/banner";
import Freebook from "../components/Freebook";
import Footer from "../components/Footer";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Banner />
      <Freebook />
      <Footer />
    </div>
  );
};

export default Home;
