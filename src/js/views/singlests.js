import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlests = (props) => {
  const { store, actions } = useContext(Context);
  const params = useParams();
  useEffect(() => {
    actions.getStarship(params.uid);
  }, []);
  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-6">
          <img
            src={`https://starwars-visualguide.com/assets/img/starships/${params.uid}.jpg`}
            alt=""
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-lg-6 col-6 text-center">
          <h1>{store.starship.properties && store.starship.properties.name}</h1>
          <p>{store.starship.description}</p>
        </div>
      </div>
      <hr className="text-danger" />
      <div className="row">
        <div className="col-12">
          <table
            border="0"
            className="text-danger fw-bold text-center mx-auto fs-5"
          >
            <thead>
              <tr>
                <th>Model</th>
                <th>Starship Class</th>
                <th>Manufacturer</th>
                <th>Length</th>
                <th>Crew</th>
                <th>Passengers</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>
                  {store.starship.properties && store.starship.properties.model}
                </td>
                <td>
                  {store.starship.properties &&
                    store.starship.properties.starship_class}
                </td>
                <td>
                  {store.starship.properties &&
                    store.starship.properties.manufacturer}
                </td>
                <td>
                  {store.starship.properties &&
                    store.starship.properties.length}
                </td>
                <td>
                  {store.starship.properties && store.starship.properties.crew}
                </td>
                <td>
                  {store.starship.properties &&
                    store.starship.properties.passengers}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
