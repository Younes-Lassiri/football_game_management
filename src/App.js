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
import 'boxicons';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Play from "./Play/Play";
function App() {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={(
            <>
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
            </>
          )}/>
          <Route path="/pages/play" element={<Play/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
