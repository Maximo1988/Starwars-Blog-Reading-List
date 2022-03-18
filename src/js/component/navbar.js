import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const Navbar = () => {
  const { store, actions } = useContext(Context);
  return (
    <nav className="navbar navbar-dark bg-light mb-3">
      <div className="container">
        {""}
        <Link to="/">
          <div className="StarWars">
            <span className="navbar-brand mb-0 h1">
              <img
                src="https://img.icons8.com/ios/50/000000/star-wars.png"
                width="50px"
                height="50px"
              ></img>
            </span>
          </div>
        </Link>

        <div className="ml-auto">
          <div className="dropdown">
            <button
              className="btn btn-primary dropdown-toggle"
              type="button"
              id="dropdownMenuButton1"
              data-toggle="dropdown"
              aria-expanded="false"
            >
              Favoritos{"" + store.Favorito.length}
            </button>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
              {store.Favorito.length > 0
                ? store.Favorito.map((item, index) => (
                    <li key={index}>
                      <i
                        className="bi bi-trash-fill position-absolute top-40 end-0 "
                        onClick={() => actions.eliminarFavorito(index)}
                      ></i>
                      {item}
                    </li>
                  ))
                : "Empty"}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
