import React from "react";
import Faqs from "./Faqs/Faqs";
import Featured from "./Featured/Featured";
import Goals from "./Goals/Goals";
import Info from "./Info/Info";
import Reviews from "./Reviews/Reviews";
import Stadiums from "./Stadiums/Stadiums";
import Stats from "./Stats/Stats";
import Steps from "./Steps/Steps";
function App() {
  return (
    <div className="app">
      <Featured/>
      <Stats/>
      <Stadiums/>
      <Steps/>
      <Reviews/>
      <Goals/>
      <Faqs/>
      <Info/>
    </div>
  );
}

export default App;