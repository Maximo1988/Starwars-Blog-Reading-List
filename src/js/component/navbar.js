import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-light bg-light mb-3">
      <Link to="/">
        <span
          className="navbar-brand mb-0 h1"
>
          FontAwesomeIcon
          icon="fa-solid fa-starfighter"
        </span>
      </Link>
      <div className="ml-auto">
        <Link to="/tarjetas">
          <div class="dropdown">
            <button
              type="button"
              class="btn btn-primary dropdown-toggle"
              data-toggle="dropdown"
            >
              Favorites
            </button>
            <div class="dropdown-menu">
              <a class="dropdown-item" href="#">
                Link 1
              </a>
              <a class="dropdown-item" href="#">
                Link 2
              </a>
              <a class="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};
