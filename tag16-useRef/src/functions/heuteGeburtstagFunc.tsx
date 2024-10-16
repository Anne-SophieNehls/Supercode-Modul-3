import { nameRef, dateRef } from "../components/Form";
import { useRef } from "react";

const dateToday = new Date();
const inputDate = new Date(dateRef.current?.value ?? "");

export default function checkBirthday() {
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
