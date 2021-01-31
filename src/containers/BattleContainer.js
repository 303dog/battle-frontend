import React, { Component } from "react";
import { store } from '../store';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import HeroContainer from './HeroContainer';

class BattleContainer extends Component {
  state = {
    goodGuy: store.goodGuy,
    evilGuy: store.evilGuy,
    
  };
  

 renderTheChosen = () => {  console.log(this.state.goodGuy)
   const good = this.props.goodGuy; 
   const evil = this.props.evilGuy;
    return (
      <div className="marquee">
      <img src={good.smImg} alt={"hero"}/>
      <img src={evil.smImg} alt={"evil"}/>
    </div>
    
   )
 }

 

  render() {
    debugger;
    return (
      <>
      <h1>Battle Arena</h1>
        <Link to={"/"}>Battle to the Death!</Link>
          {this.renderTheChosen()}
 
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,
});

export default connect(mapStateToProps) (BattleContainer);