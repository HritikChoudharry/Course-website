import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap-grid.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";
import Home from "./Home";
import Courses from "./Courses";
import About from "./About";
import Contact from "./Contact";
import Navbar from "./Navbar";
import { Switch, Route, Redirect } from "react-router-dom";
import './App.css';




const App = () => {
    
  return (
      <>
          <Navbar /> 
          <Switch>
              <Route exact path="/" component={Home} />
              <Route exact path="/about" component={About} />
              <Route exact path="/courses" component={Courses} />
              <Route exact path="/contact" component={Contact} />
              <Redirect to="/" />
          </Switch> 
      </>
  );
};
export default App;

