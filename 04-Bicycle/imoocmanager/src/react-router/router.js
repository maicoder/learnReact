import React from "react";
import { HashRouter as Router, Route } from "react-router-dom";
import Main from "./Main";
import Topic from "./Topic";
import List from "./List";
import Home from "./home";

const IRouter = () => {
  return (
    <Router>
      <Home>
        <Route path="/main" render={() => {
          return (
            <Main>
              <Route path="/main/one" component={List}></Route>
            </Main>
          )
        }}></Route>
        <Route path="/topic" component={Topic}></Route>
        <Route path="/list" component={List}></Route>
      </Home>
    </Router>
  );
}

export default IRouter;