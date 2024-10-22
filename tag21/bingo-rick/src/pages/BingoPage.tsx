import { useRef, useState } from "react";
import { fetchEpisodeById } from "../lib/api";
import { GameState } from "../types";
import { checkBingo } from "../lib/checkBingo";
import Confetti from "react-confetti";
import useWindowSize from "react-use/lib/useWindowSize";
import Fanfare from "../components/Fanfare";
import { Link } from "react-router-dom";

export default function BingoPage() {
  const inputRef = useRef<HTMLInputElement>(null);
  const [gameState, setGameState] = useState<GameState | null>(null);

  const isBingo = gameState ? checkBingo(gameState) : false;

  async function handleClick() {
    // console.log(inputRef.current?.value)
    const episodeNumber = inputRef.current!.value;
    const episodeData = await fetchEpisodeById(episodeNumber);
    const newGameState = episodeData.characters
      .slice(0, 16)
      .map((characterUrl) => {
        // const [_,id] = characterUrl.split("/character/")
        const id = characterUrl.split("/character/")[1];
        return {
          characterId: id,
          checked: false,
        };
      });
    setGameState(newGameState);
    // "https://rickandmortyapi.com/api/episode/28"
  }

  const handleBingoClick = (clickedId: string) => {
    if (!gameState) {
      return;
    }
    console.log(`${clickedId} was Clicked`);

    const newGameState = gameState.map((el) => {
      // wir schauen uns jedes element des arrays an,
      // veraendern aber nur das geklickte
      if (el.characterId === clickedId) {
        return { ...el, checked: true };
      }
      return el;
    });
    setGameState(newGameState);
  };
  const { width, height } = useWindowSize();

  return (
    <main>
      <input defaultValue={1} type="number" min={1} max={51} ref={inputRef} />
      <button onClick={handleClick}>Spiel Starten</button>
      {/* <select name="" id="">
            {daten.map((i)=>(
                <option value="1"></option>
            ))}
        </select> */}
      {isBingo && <h1>Bingo!!!!!!!!!!!!!!</h1>}
      {isBingo && <Confetti width={width} height={height} />}
      {isBingo && <Fanfare />}
      <div className="bingo-board">
        {gameState?.map((el) => (
          <div
            className={`bingo-board__cell ${
              el.checked ? "bingo-board__cell--checked" : ""
            }`}
            key={el.characterId}
            onClick={() => handleBingoClick(el.characterId)}
          >
            <img
              className="bingo-board__image"
              src={`https://rickandmortyapi.com/api/character/avatar/${el.characterId}.jpeg`}
              alt=""
            />
            <Link to={`/character/${el.characterId}`}>Zur Charakterinfo</Link>
          </div>
        ))}
        {isBingo ? (
          <h2 className="bingo-board__success-overlay">DAS IST EIN BINGO</h2>
        ) : null}
      </div>
    </main>
  );
}

// const gameState = [
//     {
//         characterId: "12",
//         checked: false
//     },
//     {
//         characterId: "1",
//         checked: true
//     },
//     ...
// ]
