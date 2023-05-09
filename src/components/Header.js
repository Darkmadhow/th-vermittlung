import { NavLink } from "react-router-dom";
import "./Header.css";
import backgroundImage from "../img/header.jpg";

export default function Header() {
  return (
    <header
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "40% 60%",
      }}
    >
      <div className="h1-background">
        <h1>Animal Shelter</h1>
      </div>
      <nav>
        <NavLink className="menubtns" to="/">
          Home
        </NavLink>
        <NavLink className="menubtns" to="animals">
          See our Animals
        </NavLink>
        <NavLink className="menubtns" to="contact">
          Contact
        </NavLink>
      </nav>
    </header>
  );
}
