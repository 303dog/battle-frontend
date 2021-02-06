import React, { Component } from "react";
import { connect } from "react-redux";
import TicketStats from "../components/ticketStats";
import PostIt from "../components/postStandings";

class BattleContainer extends Component {
  state = {
    winner: null,
  };


  letsBattle = () => {
    let good = this.props.goodGuy;
    let evil = this.props.evilGuy  
    let heroPoints = 0;
    let villainPoints = 0;
    for (let key in good) {
      if (good[key] > evil[key]) {
        heroPoints++;
      } else {
        villainPoints++;
      }
    } 
    if (heroPoints > villainPoints) {
      return this.setState({ winner: good });
    } else {
      return this.setState({ winner: evil });
    }
  };
  
  renderWinner = () => {
    return (
      <div className="champion">
        <h1>The Champion</h1>
        <img src={this.state.winner.mdImg} alt="champion" />
        <div>
          <h1>{this.state.winner.name}</h1>
        </div>
      </div>
    );
  };

  renderBattle = () => {
    return (
      <>
        <TicketStats good={this.props.goodGuy} evil={this.props.evilGuy}/>
        <button onClick={this.letsBattle}>HUG IT OUT</button>
        
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
    );
  }
}


const mapStateToProps = (state) => ({
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,
});

export default connect(mapStateToProps)(BattleContainer);
 