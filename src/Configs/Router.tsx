import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MemoList from "../components/MemoList";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";

const AppRouter = props => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/list/">List</Link>
            </li>
            <li>
              <Link to="/login">sign in</Link>
            </li>
            <li>
              <Link to="/register">sign up</Link>
            </li>
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/login" exact component={Login} />
          <Route path="/register" exact component={Register} />
          <Route path="/list" exact component={MemoList} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
