import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlepla = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getPlanet(params.uid);
  }, []);
  return (
    <div className="container col-8">
      <div className="row">
        <div className="col-lg-4 col-4">
          <img
            src={`https://starwars-visualguide.com/assets/img/planets/${params.uid}.jpg`}
            alt=""
            style={{ width: "100%" }}
            onError={({ currentTarget }) => {
              currentTarget.onerror = null; // prevents looping
              currentTarget.src =
                "https://starwars-visualguide.com/assets/img/placeholder.jpg";
            }}
          />
        </div>
        <div className="col-lg-8 col-8 text-center">
          <h1>{store.planeta.properties && store.planeta.properties.name}</h1>
          <p>{store.planeta.description}</p>
        </div>
      </div>
      <hr className="text-danger" />
      <div className="row">
        <div className="col-8">
          <table
            border="0"
            className="text-danger fw-bold text-center mx-auto"
          >
            <thead>
              <tr>
                <th>Diameter</th>
                <th>Rotation Period</th>
                <th>Orbital Period</th>
                <th>Gravity</th>
                <th>Population</th>
                <th>Climate</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {store.planeta.properties &&
                    store.planeta.properties.diameter}
                </td>
                <td>
                  {store.planeta.properties &&
                    store.planeta.properties.rotation_period}
                </td>
                <td>
                  {store.planeta.properties &&
                    store.planeta.properties.orbital_period}
                </td>
                <td>
                  {store.planeta.properties && store.planeta.properties.gravity}
                </td>
                <td>
                  {store.planeta.properties &&
                    store.planeta.properties.population}
                </td>
                <td>
                  {store.planeta.properties && store.planeta.properties.climate}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
