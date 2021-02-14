import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/layout/";
import { About, Event, Home } from "./pages/";

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
