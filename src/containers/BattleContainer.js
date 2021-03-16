import React, { Component } from "react";
import { connect } from "react-redux";
import TicketStats from "../components/ticketStats";
import { setPoints, setGoodGuy, setEvilGuy, setWinner } from "../actions/actionCreator";
import { Link, Route } from 'react-router-dom';
import HeroContainer from '../containers/HeroContainer';

class BattleContainer extends Component {
  state = {
    goodPoints: null,
    evilPoints: null,
    good: "",
    evil: ""
  }      



  letsBattle = () => {
    setTimeout(2000);
    let good = this.props.goodGuy
    let evil = this.props.evilGuy  
    let heroPoints = 0;
    let villainPoints = 0;
    for (let key in evil) {
      if (good[key] > evil[key]) {
       heroPoints++
      } else {
        villainPoints++ 
        }
      }
    if (heroPoints > villainPoints) {
      this.setState({
        winner: good,
        goodPoints: heroPoints,
        evilPoints: villainPoints
      })
    } else {
       this.setState({
         winner: evil,
         goodPoints: heroPoints,
         evilPoints: villainPoints
       });                        
    }
  }; 

  addPointToWins(props) {
    this.props.setPoints(props)
    return (
      <>
        <Route exact path='/' component={HeroContainer}/>
      </>
    )
  }
  

  renderWinner = () => {
    let champ = this.state.winner
    let evil = this.props.evilGuy
    let good = this.props.goodGuy
    return (
      <>
      <div className="champion">
        <h1>The Victor!!!</h1>
        <div className="float1">
        <img src={champ.mdImg} alt="Champion" />
        </div>
        <div className="columns">
         
        </div>
        <div>
          <h2> One more win for the <u>{champ.alignment}</u> guys!</h2>
          <div className="title"><h2>This makes a career total of {champ.wins} for {champ.name}</h2>
          </div>

         <Link to="/" render={() => this.addPointToWins()} > Return</Link>
          <button onClick={() => this.addPointToWins(this.state.winner)}>Points</button>
          
        </div>
      </div>
      </>
    );
  };


    
    renderBattle = () => {
      return (
      <>
        <TicketStats good={this.props.goodGuy} evil={this.props.evilGuy}/>
        {<button class="button" onClick={this.letsBattle}>DING</button>}
      </>
    )
    
  }
  
  render() {
    return (
      <>
        <div className="main-container">
          {this.state.winner ? this.renderWinner() : this.renderBattle()}
        </div>     
        </>
       )
  }
}


const mapStateToProps = (state) => ({
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,
  winner: state.winner,

});

export default connect(mapStateToProps,  {  setWinner, setEvilGuy, setPoints, setGoodGuy })(BattleContainer);