import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Teste from "./pages/Teste";

const Routes: React.FC = () => {
  return (
    <Router>
      <Switch>
        <Route path={"/"} component={Teste} exact />
      </Switch>
    </Router>
  );
};

export default Routes;
