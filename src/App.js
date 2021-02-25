import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HeroContainer from './containers/HeroContainer';
import BattleContainer from "./containers/BattleContainer";
import WinnerContainer from "./containers/WinnerContainer";



function App() {
  return (
    <Router>
      <Switch>
        <Route exact path='/' component={HeroContainer}/>
        <Route exact path='/battle' component={BattleContainer}/>
        <Route exact path='/winner' component={WinnerContainer}/>
      </Switch>
    </Router>
  );
}



export default App
