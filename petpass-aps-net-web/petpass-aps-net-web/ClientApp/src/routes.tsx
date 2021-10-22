import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Dashboard from "./pages/Dashboard/Dashboard";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={HomePage} exact />
        <Route path={"/login"} component={Login} exact />
        <Route path={"/register"} component={Register} exact />
      </Switch>
      <Switch>
        <Route path={"/dashboard"} component={Dashboard} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
