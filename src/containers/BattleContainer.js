import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';



class BattleContainer extends Component {
  state = {
    winner: null,
  }
 

renderTheChosen = () => {
  const evil = this.props.evilGuy
  const good = this.props.goodGuy
   return (
     <>
     <div className="marquee">
     <h2><p>{good.name}  - VS -  {evil.name}</p></h2>
    <img src={good.smImg} alt={"hero"}/>

    <img src={evil.smImg} alt={"evil"}/>
   
     <p><button onClick={this.letsBattle}>F-I-G-H-T!</button></p>
   </div>
     </>
  )
};

/////////////////////////////////////////
letsBattle = (evil, good) => {
  let heroPoints = 0
  let villainPoints = 0
  for(let key in good) {
     if(good[key] > evil[key]) {
       heroPoints++;
     } else {
       villainPoints++ 
    }
   }
     if(heroPoints > villainPoints) {
       return (
         this.setState({winner: good})
       )
     } else {
       return (
         this.setState({winner: evil})
         )
 }
}

/////////////////////////////////////////
renderWinner = () =>{
  //maybe ue this.setTimeout to delay rendering the winner
  //which in the future could give you an opportunity to render a fight animation or loader, etc
  const winner = this.state.winner
  console.log(winner)
  return (
    <div className="main-container">
      <h1>The Champion</h1>
      <img src={this.state.winner.mdImg} alt="champion"/>
      <div><h1>{this.state.winner.name}</h1></div>
    </div>
  )
}

/////////////////////////////////////////
render() {
  return (
    <>
    <div className="main-container">
     
      {this.state.winner ? this.renderWinner() : this.renderTheChosen()}
     
    
    </div>
    </>
  );
}
};

const mapStateToProps = (state) => ({
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,
});

export default connect(mapStateToProps) (BattleContainer);