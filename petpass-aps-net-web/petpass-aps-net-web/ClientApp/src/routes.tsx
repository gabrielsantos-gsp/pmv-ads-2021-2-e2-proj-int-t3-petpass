import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={HomePage} exact />
        <Route path={"/login"} component={Login} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
