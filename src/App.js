import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./components/Home/Home";
import NotMatch from "./components/NotMatch/NotMatch";
import PostDetails from "./components/PostDetails/PostDetails";
import Header from "./components/Header/Header";

function App() {
  return (
    <div>
      <Header></Header>
      <Router>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/post">
            <Home />
          </Route>
          <Route path="/posts/:postId">
            <PostDetails></PostDetails>
          </Route>
          <Route path="*">
            <NotMatch></NotMatch>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
