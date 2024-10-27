import React from "react";
import Featured from "./Featured/Featured";
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
    </div>
  );
}

export default App;