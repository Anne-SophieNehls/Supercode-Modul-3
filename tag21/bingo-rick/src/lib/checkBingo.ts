import type { GameState } from "../types";

export const checkBingo = (gameState: GameState): boolean => {
  // wir vereinfachen den state, da uns nur die "checked" property interessiert
  const simpleState = gameState.map((el) => el.checked);
  const hasBingo = checkLines(simpleState);
  return hasBingo;
};

const checkLines = (state: boolean[]) => {
  const rows = [
    state.slice(0, 4),
    state.slice(4, 8),
    state.slice(8, 12),
    state.slice(12, 16),
  ];
  const diagonals = [
    [state[0], state[5], state[10], state[15]],
    [state[3], state[6], state[9], state[12]],
  ];
  const columns = [
    [state[0], state[4], state[8], state[12]],
    [state[1], state[5], state[9], state[13]],
    [state[2], state[6], state[10], state[14]],
    [state[3], state[7], state[11], state[15]],
  ];
  // wir kombinieren alle reihen, diagonalen und spalten zu einem großen array aus arrays
  const lines = [...rows, ...diagonals, ...columns];
  // wir wollen "true" ausgeben, wenn mindestens eine unserer reihen true ist.
  // "some" ist eine arraymethode die dabei hilft. Sie gibt true zurueck, wenn fuer zumindest eines der 
  // elemente im array (also hier, fuer eine der lines) die callbackfunktion true zurueckgibt.
  // in der callbackfunktion wiederum wenden wir every an:
  // dadurch überprüfen wir ob innerhalb der jeweiligen Linie alle Elemente true sind.
  const result = lines.some((line) => line.every((el) => el === true));
  return result;
};
