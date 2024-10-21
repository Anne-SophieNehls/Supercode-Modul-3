import React, { useRef, useState } from "react";

interface Lebensmittel {
  food: string | undefined;
  gramm: number;
  kcal: number;
}

interface CalorieProps {
  calWithActiv: number;
}

export default function KalorienTracker(props: CalorieProps) {
  const [tagesKalorien, setTagesKalorien] = useState(0);
  const [lebensmittel, setLebensmittel] = useState<Lebensmittel[]>([]);

  const foodRef = useRef<HTMLInputElement>(null);
  const grammRef = useRef<HTMLInputElement>(null);
  const kcalRef = useRef<HTMLInputElement>(null);

  const handleLebensmittelHinzufuegen = (event: React.FormEvent) => {
    event.preventDefault();
    const neueLebensmittel: Lebensmittel = {
      food: foodRef.current?.value,
      gramm: Number(grammRef.current?.value),
      kcal: Number(kcalRef.current?.value),
    };
    setLebensmittel([...lebensmittel, neueLebensmittel]);
    setTagesKalorien(tagesKalorien + neueLebensmittel.kcal);
  };
  const total = props.calWithActiv - tagesKalorien;

  return (
    <div>
      <form onSubmit={handleLebensmittelHinzufuegen}>
        <div>
          <div>
            <label> What food did you eat?:</label>
            <input type="text" name="bezeichnung" ref={foodRef} />
          </div>
          <div>
            <label>how many grams: </label>
            <input type="number" name="grammzahl" ref={grammRef} />
          </div>
          <div>
            <label>how many calories:</label>
            <input type="number" name="kalorien" ref={kcalRef} />
          </div>
        </div>
        <button id="add-food-btn">Add Food to daily calorie limit</button>
        <div id="left-over-kcal">
          <ul>
            {lebensmittel.map((lebensmittel, index) => (
              <li key={index}>
                {lebensmittel.food}: ({lebensmittel.gramm}g,
                {lebensmittel.kcal}kcal)
              </li>
            ))}
          </ul>
          <p>left over Calories: {total}kcal</p>
        </div>
      </form>
    </div>
  );
}
