import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-light mb-3">
      <Link to="/">
        <p><i className="fa-solid fa-starfighter"/>
        Star Wars{" "}
		    </p>
      </Link>
      <div className="ml-50">
        <Link to="/personajes">
          <div className="dropdown">
            <button
              type="button"
              className="btn btn-primary dropdown-toggle"
              data-toggle="dropdown">
              Favorites
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                Link 1
              </a>
              <a className="dropdown-item" href="#">
                Link 2
              </a>
              <a className="dropdown-item" href="#">
                Link 3
              </a>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};
