import React, { Component } from "react";
import { connect } from "react-redux";
import TicketStats from "../components/ticketStats";
import { setPoints, setGoodGuy, setEvilGuy, setWinner, setGame } from "../actions/actionCreator";
import { Link, Route } from 'react-router-dom';
import HeroContainer from './HeroContainer';
import './Battle.css';


const initialState = {
  heros: [],
  goodGuy: null,
  evilGuy: null,
  winner: null,
};



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
    console.log("addPoints ReRouting")
    return (
      <>
      
      <div className='reset'>{this.setState(initialState)}</div>
      <Route exact path='/' component={HeroContainer}/>
      </>
    )
  }
  
  renderWinner = () => {
    let champ = this.state.winner;
    return (
      <div className="champion">
      <div className="oppOne evenboxinnerB">
      <h1>The Victor!!!</h1>
      </div>
      <div className="battle__columns">
        <img className='champPic' src={champ.mdImg} alt="Champion" />
        </div>
         
        <div className="battle__title">
          <h2> One more win for the <u>{champ.alignment}</u> guys!</h2>
          <div className="battle__titleB boxz"><h2>This makes a career total of {champ.wins} for {champ.name}</h2>
          </div>
          
          <button onClick={() => {this.addPointToWins(this.state.winner)} } className='point__button'>Points</button>
          <Link to={{
            pathname: '/',
            state: { heros: undefined}
          }}> pop
            </Link>
        </div>
      </div>
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

export default connect(mapStateToProps,  {  setWinner, setEvilGuy, setPoints, setGoodGuy, setGame })(BattleContainer);