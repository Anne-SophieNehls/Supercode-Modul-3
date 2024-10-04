import "./App.css";
import { AllBeer } from "./pages/AllBeerFetch";
import { RandomBeer } from "./pages/RandomBeerFetch";

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
