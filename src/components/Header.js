import { NavLink } from "react-router-dom";

export default function Header() {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="animals">See our Animals</NavLink>
        <NavLink to="contact">Contact</NavLink>
      </nav>
    </header>
  );
}
