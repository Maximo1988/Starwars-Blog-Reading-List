import React from "react";
import { Link } from "react-router-dom";

const Inicio = () => {
  return (
    <div className="row flex-fill vh-100">
      <div className="col-2 bg-dark"></div>
      <div className="col-8 bg-light">
        <ul>
        <Link to="/personajes">
          <li>
            <h3 className="mt-3">Personajes</h3>
          </li>
        </Link>
        <Link to="/planetas">
          <li>
            <h3 className="mt-3">Planetas</h3>
          </li>
        </Link>
        <Link to="/vehiculos">
          <li>
            <h3 className="mt-3">Vehiculos</h3>
          </li>
        </Link>
        </ul>
      </div>
      <div className="col-2 bg-dark"></div>
    </div>
  );
};

export default Inicio;
