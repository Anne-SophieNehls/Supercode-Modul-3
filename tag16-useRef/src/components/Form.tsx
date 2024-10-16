import { useRef } from "react";
//import checkBirthday from "../functions/heuteGeburtstagFunc";

export default function Form() {
  const nameRef = useRef<HTMLInputElement>(null);
  const dateRef = useRef<HTMLInputElement>(null);

  const dateToday = new Date();
  const inputDate = new Date(dateRef.current?.value ?? "");
  console.log(dateToday);

  function checkBirthday() {
    if (
      dateToday.getDate() === inputDate.getDate() &&
      dateToday.getMonth() === inputDate.getMonth()
    ) {
      alert(`Happy Birthday to you ${nameRef.current?.value} !`);
      // canvas style display= block
    } else {
      alert(`Its not your Birthday, sorry ${nameRef.current?.value} :(`);
    }
  }

  return (
    <form action="">
      <h1>Hast du heute Geburtstag?</h1>
      <label htmlFor="name">Gib deinen Namen ein:</label>
      <input type="text" id="name" ref={nameRef} />
      <label htmlFor="B-Day">gib dein Geburtsdatum ein:</label>
      <input type="date" id="B-Day" ref={dateRef} />
      <button onClick={checkBirthday}>Time to Party / or not</button>
    </form>
  );
}
