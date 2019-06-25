import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import MemoList from "../components/MemoList";
import Home from "../components/Home";

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
          </ul>
        </nav>
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/list" exact component={MemoList} />
        </Switch>
      </div>
    </Router>
  );
};
export default AppRouter;
