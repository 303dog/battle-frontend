import React, { Component } from "react";
import { connect } from "react-redux";
import TicketStats from "../components/ticketStats";
import { setPoints, setGoodGuy, setEvilGuy, setHeros, setWinner } from "../actions/actionCreator";
import {Link, BrowserRouter as Router, Route } from 'react-router-dom';



class BattleContainer extends Component {
        
      
  letsBattle = () => {
    let good = this.props.goodGuy
    let evil = this.props.evilGuy  
    let heroPoints = 0;
    let villainPoints = 0;
    for (let key in evil) {
      if (good[key] > evil[key]) {
        heroPoints++;
      } else {
        villainPoints++;
      }
    } if (heroPoints > villainPoints) {
       this.props.setWinner(good);
    } else {
       this.props.setWinner(evil);                        
    }
  }; 
  

  renderWinner = () => {
    let champ = this.props.winner
    console.log(champ.wins)
    return (
      <>
      <div className="champion">
        <h1>The Champion</h1>
        <img src={champ.mdImg} alt="Champion" />
        <div>
          <h1>{champ.name}</h1>
          <h2>{champ.name} can add another notch to their record!</h2>
         
          <button onClick={() => this.props.setPoints(this.props.winner)}>Points</button>
          <h2> This makes {this.props.winner.wins} career wins!!</h2>
          
          
        </div>
      </div>
      </>
    );
  };

  handleClick = () => {
    return (
      <>
      <Link to={this.props.setPoints(this.props.winner)}>CLICK </Link>
       <Route path="/battle" render={() => this.props.setPoints(this.props.winner)}/>
      </>
    )
  }
    
    renderBattle = () => {
      return (
      <>
        <TicketStats good={this.props.goodGuy} evil={this.props.evilGuy}/>
        {<button onClick={this.letsBattle}>Lets Battle</button>}
      </>
    )
    
  }
  
  render() {
    return (
      <>
        <div className="main-container">
          {this.props.winner ? this.renderWinner() : this.renderBattle()}
        </div>
        <div className="winner">
           <button onClick={this.renderGame}>New Battle</button>
        </div>
        </>
       )
  }
}


const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,
  winner: state.winner,

});

export default connect(mapStateToProps,  {  setWinner, setHeros, setEvilGuy, setPoints, setGoodGuy })(BattleContainer);
 