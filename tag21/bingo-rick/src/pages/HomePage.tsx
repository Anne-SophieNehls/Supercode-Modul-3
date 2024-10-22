import { Link } from "react-router-dom";

export default function HomePage() {
  return <main>
    <Link to="/bingo">Bingo Starten</Link>
    <p>Heyy, das ist das coole Rick & Morty Game; Spiele es während du die Serie guckst, okay?</p>
  </main>;
}
