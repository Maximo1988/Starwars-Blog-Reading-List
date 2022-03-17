import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-light mb-3">
      <Link to="/">
        <img src="https://img.icons8.com/ios/50/000000/star-wars.png" width="50px" height="50px"></img>
      </Link>
      <div className="ml-50">
        <div className="dropdown">
          <button
            className="btn btn-primary dropdown-toggle"
            type="button"
            id="dropdownMenuButton"
            data-toggle="dropdown"
            aria-expanded="false"
          >
            Favoritos
          </button>
          <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
            <a className="dropdown-item" href="#">
              Action
            </a>
            <a className="dropdown-item" href="#">
              Another action
            </a>
            <a className="dropdown-item" href="#">
              Something else here
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};
