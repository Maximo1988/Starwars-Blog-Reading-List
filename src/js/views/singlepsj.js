import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlepsj = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getpersonajes(params.id);
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-6">
					<img src="https://starwars-visualguide.com/assets/img/characters/" alt="" style={{ width: "100%" }} />
				</div>
				<div className="col-lg-6 col-6 text-center">
					<h1>{store.personajes && store.personajes.name}</h1>
					<p>{store.personajes.description}</p>
				</div>
			</div>
			<hr className="text-danger" />
			<div className="row">
				<div className="col-12">
					<table border="0" className="text-danger fw-bold text-center mx-auto fs-5">
						<thead>
							<tr>
								<th>Name</th>
								<th>Birth Year</th>
								<th>Gender</th>
								<th>Height</th>
								<th>Skin Color</th>
								<th>Eye Color</th>
							</tr>
						</thead>
						<tbody>
							<tr>
								<td>{store.personajes && store.personajes.name}</td>
								<td>{store.personajes && store.personajes.birth_year}</td>
								<td>{store.personajes && store.personajes.gender}</td>
								<td>{store.personajes && store.personajes.height}</td>
								<td>{store.personajes && store.personajes.skin_color}</td>
								<td>{store.personajes && store.personajes.eye_color}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};