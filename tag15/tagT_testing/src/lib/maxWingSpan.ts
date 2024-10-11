import { useState } from "react";
import type { Bird } from "../data/birds";


type MaxWingSpanResult = {
    wingspan_max: string;
    birds: Bird[];
  }[];


  export const filterByWingspan = (birds: Bird[], wishedWingSpan: number): MaxWingSpanResult => {
    // 3. datensätze umstellen mit .map .flat [... new Set] etc
    const groupingItems = birds.map((bird) => bird["foodsources"]).flat();

    // 4. umgestellte Daten filtern zu <= value
    // 5. HTML ausgabe der gefilterten daten
  }
