import { useState } from "react";
import IBeerAPI from "../interfaces/IBeerAPI";
import { API_URL } from "../components/BeerURL";

export function RandomBeer() {
  const [randomBeer, setRandomBeer] = useState<IBeerAPI>();

  const fetchRandomBeer = async () => {
    try {
      const response = await fetch(`${API_URL}/random`);
      const cacheddata = await response.json();
      setRandomBeer(cacheddata);
    } catch (err) {
      console.error("Data for randomBeer couldn't be fetched.", err);
    }
  };

  return (
    <article>
      <div className="start">
        <div className="image-box">
          <img src={randomBeer?.image_url} alt="beer" className="image" />
          <button onClick={fetchRandomBeer}>Random Beer</button>
          <p>
            <b>Beer Beer Songtext von Korpiklaani</b>
            From evening to morning, And morning to evening, I wanna drink,
            Something stronger than a man, From evening to morning, And morning
            to evening, I wanna drink, Cause that′s what I am! Beer, beer! I
            want beer! From beer I get really drunk. Beer, beer! I need more
            beer! So much I pass out. Beer, beer! I want beer! From beer I get
            really drunk. Beer, beer! I need more beer! So much I pass out. For
            beer I'm working, For beer I′m fighting, For beer I'll do, Whatever
            I have to. When drunk I'm talking, When drunk I′m joking, When drunk
            I can be as I′ve, Always wanted to be: Beer, beer I want beer From
            beer I get really drunk Beer, beer I need more beer So much I pass
            out Beer, beer I want beer From beer I get really drunk Beer, beer I
            need more beer So much I pass out!
          </p>
        </div>
      </div>
      {randomBeer && (
        <div className="beer-card">
          <img
            src={randomBeer.image_url}
            alt={randomBeer.name}
            className="product-image"
          />
          <div className="beer-details">
            <h2>{randomBeer.name}</h2>
            <h3>{randomBeer.tagline}</h3>
            <p>{randomBeer.contributed_by}</p>
          </div>
        </div>
      )}
    </article>
  );
}
