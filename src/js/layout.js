import React, { useState, useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ScrollToTop from "./component/scrollToTop";

import { Demo } from "./views/demo";
import { Singlepsj } from "./views/singlepsj";
import { Singlepla } from "./views/singlepla";
import { Singlests } from "./views/singlests";
import injectContext from "./store/appContext";

import { Navbar } from "./component/navbar";
import { Footer } from "./component/footer";
import Inicio from "../js/views/inicio";
import Cardplanets from "./views/cardplanets";
import Cardstarships from "./views/cardstarships";
import Cardpeople from "./views/cardpeople";

//create your first component
const Layout = () => {
  const basename = process.env.BASENAME || "";

  return (
    <div>
      <BrowserRouter basename={basename}>
        <ScrollToTop>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Inicio></Inicio>
            </Route>
            <Route exact path="/cardpeople">
              <Cardpeople></Cardpeople>
            </Route>
            <Route exact path="/cardplanets">
              <Cardplanets></Cardplanets>
            </Route>
            <Route exact path="/cardstarships">
              <Cardstarships></Cardstarships>
            </Route>
            <Route exact path="/singlepsj:theid">
              <Singlepsj></Singlepsj>
            </Route>
            <Route exact path="/singlepla:theid">
              <Singlepla></Singlepla>
            </Route>
            <Route exact path="/singlests:theid">
              <Singlests></Singlests>
            </Route>
          </Switch>
          <Footer />
        </ScrollToTop>
      </BrowserRouter>
    </div>
  );
};

export default injectContext(Layout);
