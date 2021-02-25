import React, { Component } from "react";
import { connect } from "react-redux";
import TicketStats from "../components/ticketStats";
import { setPoints, setGoodGuy, setEvilGuy, setHeros, setWinner } from "../actions/actionCreator";
import { Link } from 'react-router-dom';

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
        <h1>The Victor!!!</h1>
        <img src={champ.mdImg} alt="Champion" />
        <div>
          <h1>{champ.name}</h1>
          <h2>{champ.name} can add another win for the <u>{champ.alignment}</u> guys!</h2>

         <Link to="/winner" > Totals</Link>
          <button onClick={() => this.props.setPoints(this.props.winner)}>Points</button>
          
        </div>
      </div>
      </>
    );
  };

    
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