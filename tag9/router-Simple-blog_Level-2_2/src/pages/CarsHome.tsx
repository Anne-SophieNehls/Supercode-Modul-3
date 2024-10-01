import { Link } from "react-router-dom";
import cars from "../data.json";

export default function HomeCars() {
  return (
    <section className="grid">
      {cars.map((car) => {
        return (
          <div>
            <h2> {car.CarMake}</h2>
            <Link to={`/cars/${car.id}`}>Read more!</Link>
          </div>
        );
      })}
    </section>
  );
}
