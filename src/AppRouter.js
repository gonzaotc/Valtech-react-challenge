import React from "react";

import { BrowserRouter as Router, Switch, Route, Redirect } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";

import Collections from "./components/Routes/Collections";
import Men from "./components/Routes/Men";
import Women from "./components/Routes/Women";
import About from "./components/Routes/About";
import Contact from "./components/Routes/Contact";
import HamburguerMenu from "./components/NavBar/HamburguerMenu/HamburguerMenu";

const AppRouter = () => {
  return (
    <Router>
      <NavBar/>
      <div>
        <Switch>
          <Route exact path="/collections" component={Collections}></Route>
          <Route exact path="/men" component={Men}></Route>
          <Route exact path="/women" component={Women}></Route>
          <Route exact path="/about" component={About}></Route>
          <Route exact path="/contact" component={Contact}></Route>
          <Redirect to="/collections" />
        </Switch>
      </div>
    </Router>
  );
};

export default AppRouter;
