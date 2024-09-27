import { useState } from "react";
import IBeerAPI from "./interfaces/IBeerAPI";
import "./App.css";
import { AllBeer } from "./components/AllBeerFetch";
import { RandomBeer } from "./components/RandomBeerFetch";

//// Output hier machen
function App() {
  return (
    <div id="output">
      <AllBeer />
      <RandomBeer />
    </div>
  );
}

export default App;
