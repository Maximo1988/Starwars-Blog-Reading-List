import React, {useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Demo } from "./views/demo";
import { Single } from "./views/single";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Inicio from "../js/views/inicio";
import Contenido from "./views/contenido";
import Personajes from "./views/personajes";
import Planetas from "./views/planetas";
import Vehiculos from "./views/vehiculos";


//create your first component
const Layout = () => {

  //    tarea, settarea
  const [megusta, setMegusta] = useState("");
  //    pendientes,setpendientes
	const [lista, setLista] = useState([]);
	useEffect(() => {
		createUser();
		getData();
	}, []);

  const createUser = () => {
		fetch("https://github.com/Maximo1988/Starwars-Blog-Reading-List.git", {
			method: "POST",
			body: JSON.stringify([]),
			headers: {
				"Content-Type": "application/json",
			},
		})
			.then((resp) => {
				return resp.json();
			})
			.then((data) => {
				//Aquí es donde debe comenzar tu código después de que finalice la búsqueda
				console.log(data); //esto imprimirá en la consola el objeto exacto recibido del servidor
			})
			.catch((error) => {
				//manejo de errores
				console.log(error);
			});
	};

  const subirData = (Layout) => {
		const settingFetch = {
			method: "PUT",
			body: JSON.stringify(Layout),
			headers: {
				"Content-Type": "application/json",
			},
		};

		fetch(
			"https://github.com/Maximo1988/Starwars-Blog-Reading-List.git",
			settingFetch
		)
			.then((respuesta) => respuesta.json())
			.then((response) => console.log(response));
	};

  const getData = () => {
		fetch("https://github.com/Maximo1988/Starwars-Blog-Reading-List.git", {
			method: "GET",
			headers: { "content-type": "application/json" },
		})
			.then((resp) => resp.json())
			.then((data) => setLista(data))
			.catch((err) => {
				console.log(err);
			});
	};

  const AgregarTarea = (e) => {
		e.preventDefault();
		if (megusta == "") {
			alert("el campo esta vacío");
		} else {
			setLista([...lista, { label: megusta, done: false }]);

			setMegusta("");
			subirData([...lista, { label: megusta, done: false }]);
		}
	};

	function eliminarTarea(task) {
		const arrayFilter = pendientes.filter((item) => item.label !== task);
		setLista(arrayFilter);
		subirData(arrayFilter);
	}

	const cantLista = () => {
		let cantidad = 0;
		cantidad = lista.length;
		return cantidad;
	};

  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar/>
          <Switch>
            <Route exact path="/">
              <Inicio></Inicio>
            </Route>
            <Route exact path="/contenido">
              <Contenido></Contenido>
            </Route>
            <Route exact path="/personajes">
              <Personajes></Personajes>
            </Route>
            <Route exact path="/planetas">
              <Planetas></Planetas>
            </Route>
			<Route exact path="/vehiculos">
              <Vehiculos></Vehiculos>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
      </div>
  );
};

export default injectContext(Layout);
