import Blog from "./Blog";
import Calorie from "./Calorie";
import Hero from "./Hero";

export default function Content() {
  return (
    <main>
      <Hero />
      <Blog />
      {<Calorie />}
    </main>
  );
}
