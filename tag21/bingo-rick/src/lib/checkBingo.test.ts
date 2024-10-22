import { expect, test } from "vitest";
import { checkBingo } from "./checkBingo";

const bingoInRow1Data = [
  {
    characterId: "1",
    checked: true,
  },
  {
    characterId: "2",
    checked: true,
  },
  {
    characterId: "35",
    checked: true,
  },
  {
    characterId: "38",
    checked: true,
  },
  {
    characterId: "62",
    checked: false,
  },
  {
    characterId: "92",
    checked: false,
  },
  {
    characterId: "127",
    checked: false,
  },
  {
    characterId: "144",
    checked: true,
  },
  {
    characterId: "158",
    checked: false,
  },
  {
    characterId: "175",
    checked: true,
  },
  {
    characterId: "179",
    checked: false,
  },
  {
    characterId: "181",
    checked: false,
  },
  {
    characterId: "239",
    checked: false,
  },
  {
    characterId: "249",
    checked: false,
  },
  {
    characterId: "271",
    checked: false,
  },
  {
    characterId: "338",
    checked: false,
  },
];

const bingoInRow3Data = [
  {
    characterId: "1",
    checked: false,
  },
  {
    characterId: "2",
    checked: true,
  },
  {
    characterId: "35",
    checked: false,
  },
  {
    characterId: "38",
    checked: false,
  },
  {
    characterId: "62",
    checked: false,
  },
  {
    characterId: "92",
    checked: false,
  },
  {
    characterId: "127",
    checked: false,
  },
  {
    characterId: "144",
    checked: false,
  },
  {
    characterId: "158",
    checked: true,
  },
  {
    characterId: "175",
    checked: true,
  },
  {
    characterId: "179",
    checked: true,
  },
  {
    characterId: "181",
    checked: true,
  },
  {
    characterId: "239",
    checked: false,
  },
  {
    characterId: "249",
    checked: false,
  },
  {
    characterId: "271",
    checked: false,
  },
  {
    characterId: "338",
    checked: false,
  },
];

const noBingoData = [
  {
    characterId: "1",
    checked: false,
  },
  {
    characterId: "2",
    checked: true,
  },
  {
    characterId: "35",
    checked: false,
  },
  {
    characterId: "38",
    checked: true,
  },
  {
    characterId: "62",
    checked: true,
  },
  {
    characterId: "92",
    checked: false,
  },
  {
    characterId: "127",
    checked: false,
  },
  {
    characterId: "144",
    checked: false,
  },
  {
    characterId: "158",
    checked: false,
  },
  {
    characterId: "175",
    checked: false,
  },
  {
    characterId: "179",
    checked: true,
  },
  {
    characterId: "181",
    checked: false,
  },
  {
    characterId: "239",
    checked: true,
  },
  {
    characterId: "249",
    checked: true,
  },
  {
    characterId: "271",
    checked: false,
  },
  {
    characterId: "338",
    checked: true,
  },
];

test("Detects horizontal Bingos", () => {
  expect(checkBingo(bingoInRow1Data)).toBe(true);
  expect(checkBingo(bingoInRow3Data)).toBe(true);
});

test("Doesn't falsely report Bingo if there isn't a bingo", ()=>{
    expect(checkBingo(noBingoData)).toBe(false);
})