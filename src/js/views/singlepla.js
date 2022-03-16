import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link, useParams } from "react-router-dom";
import { Context } from "../store/appContext";

export const Singlepla = props => {
	const { store, actions } = useContext(Context);
	const params = useParams();
	useEffect(() => {
		actions.getplanetas(params.id);
	}, []);
	return (
		<div className="container">
			<div className="row">
				<div className="col-lg-6 col-6">
					<img src="https://starwars-visualguide.com/assets/img/planets/" alt="" style={{ width: "100%" }} />
				</div>
				<div className="col-lg-6 col-6 text-center">
					<h1>{store.planetas && store.planetas.name}</h1>
					<p>{store.planetas.description}</p>
				</div>
			</div>
			<hr className="text-danger" />
			<div className="row">
				<div className="col-12">
					<table border="0" className="text-danger fw-bold text-center mx-auto fs-5">
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
								<td>{store.planetas && store.planetas.diameter}</td>
								<td>{store.planetas && store.planetas.rotation_period}</td>
								<td>{store.planetas && store.planetas.orbital_period}</td>
								<td>{store.planetas && store.planetas.gravity}</td>
								<td>{store.planetas && store.planetas.population}</td>
								<td>{store.planetas && store.planetas.climate}</td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	);
};