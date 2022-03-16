import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cardstarships = ({ item }) => {
  return (
		<div className="card mx-2" style={{ minWidth: "18rem" }}>
			<img src="https://starwars-visualguide.com/assets/img/starships/9.jpg" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">
					
						<li>{`Starship Class: ${item.starship_class}`}</li>
						<li>{`Manufacturer: ${item.manufacturer}`}</li>
						<li>{`Crew: ${item.crew}`}</li>
					
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

Cardstarships.propTypes = {
	item: PropTypes.object
};
export default Cardstarships;
