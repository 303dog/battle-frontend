import React, { Component } from "react";
import { connect } from "react-redux";
import { setWinner } from "../actions/actionCreator";
import { Link } from 'react-router-dom';

class WinnerContainer extends Component {
        
      renderStats = () => {
          return (
              <div className="stats">
                  <h1>Champion    {this.props.winner.name} </h1>
                  <img src={this.props.winner.mdImg} alt={"champion"}/>
                  <h2>Career Victories: <b>{this.props.winner.wins}</b></h2>
              </div>
          )
      }



  render() {
    return (
      <>
      {this.renderStats()}
      <div className="stats">
      <Link to="/" >New Fight</Link>
      </div> 
        </>
       )
   }    
  
}


const mapStateToProps = (state) => ({
  winner: state.winner,

});

export default connect(mapStateToProps,  { setWinner })(WinnerContainer);