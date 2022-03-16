import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cardplanets = ({ item }) => {
  return (
		<div className="card mx-2" style={{ minWidth: "18rem" }}>
			<img src="https://starwars-visualguide.com/assets/img/planets/" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">
					
						<li>{`Population: ${item.population}`}</li>
						<li>{`Terrain: ${item.terrain}`}</li>
						<li>{`Climate: ${item.climate}`}</li>
					
				</p>
				<div className="col-md-auto">
					<Link to={`/single/${item.url}`} className="btn btn-primary col-10">
						{"Learn more!"}
					</Link>
					<i className="fa fa-heart-o col-2" aria-hidden="true" />
				</div>
			</div>
		</div>
	);
};

Cardplanets.propTypes = {
	item: PropTypes.object
};
export default Cardplanets;

