import { useParams } from "react-router-dom";
import data from "../data.json";

export default function CarDetail() {
  const { id } = useParams();
  console.log(id);
  console.log(data);
  const car = data.find((car) => car.id === parseInt(id!));
  if (!car) {
    return "not found 404";
  }
  return (
    <div>
      <h2>{car.carModel}</h2>
      <p>Marke: {car.CarMake}</p>
      <p>Baujahr: {car.CarYear}</p>
    </div>
  );
}
