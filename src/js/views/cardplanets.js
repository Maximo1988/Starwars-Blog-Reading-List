import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cardplanets = ({ item }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/planets/${item.uid}.jpg`}
        className="card-img-top"
        alt={item.name}
      />
      <div className="card-body">
        <h5 className="card-title">{item.name}</h5>
        <p className="card-text">
          Neque porro quisquam est qui dolorem ipsum quia dolor sit amet,
          consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..."
        </p>
        <div className="col-md-auto">
          <Link
            to={`/singlepla/${item.uid}`}
            className="btn btn-primary col-10"
          >
            Learn more!
          </Link>
          <div className="col-6">
              <button type="button" className="btn btn-outline-warning d-flex justify-content-end ">
                <i className="bi bi-heart"  onClick={()=>actions.AgregarFavorito(uid.name)}></i>
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
