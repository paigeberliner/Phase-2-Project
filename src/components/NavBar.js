import React from "react";
import "./NavBar.css";

function NavBar() {
  return (
    <nav>
      <a className="nav-bar" href="home">Home</a>
      <a className="nav-bar" href ="About">About</a>
      <a className="nav-bar" href ="locations"> Favorite Location</a>
    </nav>
  );
}

export default NavBar;