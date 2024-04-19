import React from "react";
import Aboutuss from "../components/aboutus/Aboutuss";
import Header from "../components/Landing/Header";
import Footer from "../components/Landing/Footer";

import OurWorkers from "../components/Landing/OurWorkers";
function About() {
  return (
    <div>
      <Header />
      <Aboutuss />
      <OurWorkers
        content={"Meet Our Experts"}
        back="bg-white"
        items="border-orangeColor "
      />
      <Footer />
    </div>
  );
}

export default About;
