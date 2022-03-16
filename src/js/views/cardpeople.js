import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Cardpeople = ({ item }) => {
  return (
		<div className="card mx-2" style={{ minWidth: "18rem" }}>
			<img src="https://starwars-visualguide.com/assets/img/characters/" className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{item.name}</h5>
				<p className="card-text">
					
						<li>{`Gender: ${item.gender}`}</li>
						<li>{`Hair Color: ${item.hair_color}`}</li>
						<li>{`Eye Color: ${item.eye_color}`}</li>
					
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

Cardpeople.propTypes = {
	item: PropTypes.object
};
export default Cardpeople;
