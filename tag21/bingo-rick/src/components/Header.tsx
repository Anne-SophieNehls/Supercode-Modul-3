import { Link } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <h1>Rick and Morty Bingo page</h1>
      <Link className="" to="/">
        Back Home
      </Link>
    </header>
  );
}
