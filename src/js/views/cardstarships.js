import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cardstarships = ({ item }) => {
  return (
    <div className="card mb-3" style={{ maxWidth: "540px" }}>
      <img
        src={`https://starwars-visualguide.com/assets/img/starships/${item.uid}.jpg`}
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
            to={`/singlests/${item.uid}`}
            className="btn btn-primary col-10"
          >
            Learn more!
          </Link>
          <i className="fa fa-heart-o col-2" aria-hidden="true" />
        </div>
      </div>
    </div>
  );
};

Cardstarships.propTypes = {
  item: PropTypes.object,
};
export default Cardstarships;
