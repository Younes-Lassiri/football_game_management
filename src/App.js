import React from "react";
import Hero from "./Home/Hero/Hero";
import Faqs from "./Faqs/Faqs";
import Featured from "./Featured/Featured";
import Footer from "./Footer/Footer";
import Goals from "./Goals/Goals";
import Info from "./Info/Info";
import Reviews from "./Reviews/Reviews";
import Stadiums from "./Stadiums/Stadiums";
import Stats from "./Stats/Stats";
import Steps from "./Steps/Steps";

function App() {
  return (
    <div className="app">
      <Hero />
      <Featured />
      <Stats />
      <Stadiums />
      <Steps />
      <Reviews />
      <Goals />
      <Faqs />
      <Info />
      <Footer />
    </div>
  );
}

export default App;
