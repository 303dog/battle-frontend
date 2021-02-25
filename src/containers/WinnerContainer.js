import React, { Component } from "react";
import { connect } from "react-redux";
import { setWinner } from "../actions/actionCreator";
import { Link } from 'react-router-dom';
import Heros from '../components/heros';

class WinnerContainer extends Component {
        
      renderStats = () => {
        const winner = this.props.winner
          return (
              <div className="stats">
                  <h1>Champion    {winner.name} </h1>
                  <img src={winner.mdImg} alt={"champion"}/>
                  <h2>Career Victories: <b>{winner.wins}</b></h2>
              </div>
          )
      }



      render() {
        return (
          <>
          <div className="stats">
          <Link to="/" render={Heros}> Fight AGAIN</Link>
          </div> 
          {this.renderStats()}
          </>
           )
       }    
  
}


const mapStateToProps = (state) => ({
  winner: state.winner,

});

export default connect(mapStateToProps,  { setWinner })(WinnerContainer);