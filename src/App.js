import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import NavBar from "./components/navbar";
import Port from "./components/port";
import About from "./components/about";
import Home from "./components/home"

class App extends Component {
  render() { 
    return ( 
      <React.Fragment>
        <NavBar />
        <div className="routing">
          <Switch>
            <Route path="/port" component={Port} />
            <Route path="/about" component={About} />
            <Route path="/" component={Home} />
          </Switch>
        </div>
      </React.Fragment>
     );
  }
}
 
export default App;


