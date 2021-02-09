import React, { Component } from "react";
import { connect } from "react-redux";
import TicketStats from "../components/ticketStats";
import { setGoodGuy, setEvilGuy, setHeros } from "../actions/actionCreator";
import {Link, BrowserRouter as Router, Route} from 'react-router-dom';
//import RenderStats from "../components/scoreBoard";
//import { setPoints } from "../actions/actionCreator";


class BattleContainer extends Component {
  state = {
       winner: null,
     };
    
   //  componentDidMount() {
   //       this.props.setPoints();
   //    }
   //   
   //   
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
      return this.setState({ winner: good });
     
    } else {
      return this.setState({ winner: evil });                        
        
    }
  }; 
  
  selectWinner = () => {
    return (
      null
    );
    }

  renderWinner = () => {
    let champ = this.state.winner
    champ.wins++
    console.log(champ)
    return (
      <div className="champion">
        <h1>The Champion</h1>
        <img src={champ.mdImg} alt="Champion" />
        <div>
          <h1>{champ.name}</h1>
          <h2>WINS:{champ.wins}</h2>
         
         <button onClick={null}>Leader Board</button>
        </div>
      </div>
    );
  };

 // handleClick = () => {
 //   return this.props.addPoints()
 // }
    
    
    renderBattle = () => {
      return (
      <>
        <TicketStats good={this.props.goodGuy} evil={this.props.evilGuy}/>
        {<button onClick={this.letsBattle}>Lets Battle</button>}

      </>
    )
    
  }
  
  
  render() {
    console.log(this.props)
    return (
      <>
        <div className="main-container">
          {this.state.winner ? this.renderWinner() : this.renderBattle()}
           
        </div>
      </>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPoints: (id) => {dispatch({type: 'POST', id: id})}
  }
}

const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,
  winner: state.winner,

});

export default connect(mapStateToProps,  {  setHeros, setEvilGuy, setGoodGuy })(BattleContainer);
 