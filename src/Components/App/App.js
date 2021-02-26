import React, { useEffect } from "react";
import { Route, Switch, useHistory } from "react-router-dom";
import { useSelector } from "react-redux";
import Home from "../../Containers/Home/Home";
import Registartion from "../../Containers/Registration/Registration";
import Login from "../../Containers/Login/Login";
import {navigation} from "../../constants.js";
import Header from "../Header/Header";

import "./App.module.css";


function App() {
  const token = useSelector((state) => state.user.token);
  const history = useHistory();

  useEffect(() => {
    token ? history.push(navigation.home) : history.push(navigation.login);
  }, [history, token]);

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path={navigation.home} component={Home}></Route>
        <Route path={navigation.registration} component={Registartion}></Route>
        <Route path={navigation.login} component={Login}></Route>
      </Switch>
    </div>
  );
}

export default App;