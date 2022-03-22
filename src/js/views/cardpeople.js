import React, { useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

const Cardpeople = ({ item, uid }) => {
  const { actions, store } = useContext(Context);
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/characters/${uid}.jpg`}
        className="card-img-top"
        alt={item.name}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          <li>{`Gender: ${item.gender}`}</li>
          <li>{`Hair Color: ${item.hair_color}`}</li>
          <li>{`Eye Color: ${item.eye_color}`}</li>
        </p>
        <div className="row">
          <div className="col-8">
            <Link to={`/singlepsj/${uid}`} className="btn btn-primary">
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

Cardpeople.propTypes = {
  item: PropTypes.object,
};
export default Cardpeople;
