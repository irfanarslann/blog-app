import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Add from "./components/Add";
import BlogDetails from "./components/BlogDetails";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
const App = () => {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/details/:id">
              <BlogDetails />
            </Route>
            <Route path="/add">
              <Add />
            </Route>

            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
