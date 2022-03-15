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
              Favoritos
            </button>
            <div className="dropdown-menu">
              <a className="dropdown-item" href="#">
                <h3>Link 1</h3>
              </a>
              <a className="dropdown-item" href="#">
                <h3>Link 2</h3>
              </a>
              <a className="dropdown-item" href="#">
                <h3>Link 3</h3>
              </a>
            </div>
          </div>
        </Link>
      </div>
    </nav>
  );
};
