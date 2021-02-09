

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroContainer from './containers/HeroContainer';
import BattleContainer from "./containers/BattleContainer";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HeroContainer}/>
        <Route exact path='/battle' component={BattleContainer}/>
      </Switch>
    </Router>

  );
}

export default App

