export const fetchEpisodeById = async (id: string) => {
  const response = await fetch(`https://rickandmortyapi.com/api/episode/${id}`);
  const json = (await response.json()) as EpisodeResponse;
  return json;
};

export const fetchCharacterById = async (id: string) => {
  const response = await fetch(
    `https://rickandmortyapi.com/api/character/${id}`
  );
  const json = (await response.json()) as CharacterResponse;
  return json;
};

interface EpisodeResponse {
  id: number;
  name: string;
  air_date: string;
  episode: string;
  characters: string[];
  url: string;
  created: string;
}

export interface CharacterResponse {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: Array<string>;
  url: string;
  created: string;
}
