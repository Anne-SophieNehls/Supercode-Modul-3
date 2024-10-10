import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <img src="../img/bier-logo.png" alt="logo" id="logo" />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/">Random Beer</NavLink>
        <NavLink to="/">All Beers</NavLink>
      </nav>
    </header>
  );
}
