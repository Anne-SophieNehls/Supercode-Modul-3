import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchCharacterById, CharacterResponse } from "../lib/api";

export default function CharacterDetailPage() {
  const params = useParams();
  const id = params.id!;
  const [char, setChar] = useState<CharacterResponse>();

  const loadChar = () => {
    const charakterData = fetchCharacterById(id);
    setChar(charakterData);
  };
  useEffect(() => {
    loadChar();
    return (
      <main>
        <h1>{char?.name}</h1>
        <img src={char?.image} alt="character image" />
        <p>
          <strong>spezies: </strong>
          {char?.species}
        </p>
        <p>
          <strong>gender: </strong>
          {char?.gender}
        </p>
        <p>
          <strong>status: </strong>
          {char?.status}
        </p>
        <p>
          <strong>Planet: </strong>
          {char?.origin.name}
        </p>
        <p>
          <strong>Heimatort: </strong>
          {char?.location.name}
        </p>
      </main>
    );
  }, []);
}
