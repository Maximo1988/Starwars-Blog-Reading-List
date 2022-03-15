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
			<Route exact path="/single:theid">
			  <Single></Single>
			</Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
      </div>
  );
};

export default injectContext(Layout);
