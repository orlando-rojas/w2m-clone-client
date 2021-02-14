import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import About from "./components/About";
import Event from "./components/Event";
import Home from "./components/Home";
import Layout from "./components/Layout";

export default function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/about">
            <About />
          </Route>
          <Route exact path="/event">
            <Event />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}
