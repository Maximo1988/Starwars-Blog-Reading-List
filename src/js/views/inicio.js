import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import Cardpeople from "./cardpeople";
import Cardplanets from "./cardplanets";
import Cardstarships from "./cardstarships";

const Inicio = (props) => {
  const { store, actions } = useContext(Context);
  
  return (
    <div className="row flex-fill vh-100">
      <div className="col-2 bg-dark"></div>
      <div className="col-8 bg-light">
        <ul>
          <Link to="/Cardpeople">
            <li>
              <h3 className="mt-3">Personajes</h3>
              {store.personajes.map((itempersonaje, i) => {
                return (
                  <Cardpeople key={i} item={itempersonaje} uid={i+1}/>
                );
              })}
            </li>
          </Link>
          <Link to="/Cardplanets">
            <li>
              <h3 className="mt-3">Planetas</h3>
              {store.planetas.map((itemplaneta, i) => {
                return (
                  <Cardplanets key={itemplaneta.url} item={itemplaneta} />
              );
              })}
            </li>
          </Link>
          <Link to="/Cardstarships">
            <li>
              <h3 className="mt-3">Naves</h3>
              {store.naves.map((itemnave, i) => {
                return (
                <Cardstarships key={itemnave.url} item={itemnave} />
                );
              })}
            </li>
          </Link>
        </ul>
      </div>
      <div className="col-2 bg-dark"></div>
    </div>
  );
};

export default Inicio;
