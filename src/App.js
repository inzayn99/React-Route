import React from "react";
import {Route, Switch } from "react-router-dom";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Error from "./Pages/Error";
import Home from "./Pages/Home";
import Services from "./Pages/Services";

const App = () => {
return (
  <>
  <Switch>
  <Route exact path="/" component={Home} />
  <Route exact path="/contact" component={Contact} />
  <Route exact path="/About" component={About} />
  <Route exact path="/Services" component={Services} />


  <Route exact component={Error} />

  </Switch>
  {/* <Contact/>
  <About /> */}
  
  
  </>
);
};

export default App;