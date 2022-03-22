import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Cardplanets = ({ item }) => {
  const { actions, store } = useContext(Context);
  return (
    <div className="card mb-3" style={{ maxWidth: "250px" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
        className="card-img-top"
        onError={({ currentTarget }) => {
          currentTarget.onerror = null; // prevents looping
          currentTarget.src =
            "https://starwars-visualguide.com/assets/img/placeholder.jpg";
        }}
        alt={item.name}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit. There is no one who loves pain itself,
          who seeks after it and wants to have it, simply because it is pain.
        </p>
        <div className="row">
          <div className="col-8">
            <Link to={`/singlepla/${item.uid}`} className="btn btn-primary">
              Learn more!
            </Link>
          </div>
          <div className="col-3">
            <button
              onClick={() => {
                store.favorito.find((element) => {
                  return element === item.name;
                })
                  ? ""
                  : actions.AgregarFavorito(item.name);
              }}
              type="button"
              className="btn btn-outline-warning"
            >
              <i className="fa fa-heart"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Cardplanets.propTypes = {
  item: PropTypes.object,
};
export default Cardplanets;
