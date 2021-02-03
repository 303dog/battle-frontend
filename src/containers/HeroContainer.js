import React, { Component } from "react";
import GoodHeros from "../components/goodHeros";
import EvilHeros from "../components/evilHeros";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {setHeros} from '../redux/actionCreator';
import {setGoodGuy, setEvilGuy} from '../redux/actionCreator';


class HeroContainer extends Component {
 

  componentDidMount() {
    this.props.setHeros();
  }

  // renderHeros filters the "good" from the "bad" heros
  renderHeros = () => {
    return (
      !this.props.goodGuy ? (
      <GoodHeros
        goodGuys={this.props.heros.filter(
          (hero) => hero.alignment === "good"
        )}
        selectGoodGuy={this.props.setGoodGuy}
      />
     ) : (
       <>
      <EvilHeros 
        evilGuys={this.props.heros.filter(
          (hero) => hero.alignment === "bad"
        )}
        selectEvilGuy={this.props.setEvilGuy}
      />
      </>
      )
    )
  }

// renderGame handles the order in which functions are called. currently if 
//  there has not been an evilGuy picked- it will renderHeros to allow the selection of good & bad guys
  renderGame = () => {
    return (
        <div className="main-container">
          <h1>Battle of the Multiverse</h1>
          {this.props.evilGuy ? <Link to={"/battle"}> Fighters on the ticket. </Link> : this.renderHeros()}
        </div>
    )
  }

  render() {
    return (
      <>
          {this.renderGame()}
          {this.renderGame ()? <p></p>: this.renderTheChosen()}
        
          
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,
});



export default connect(mapStateToProps, { setHeros, setEvilGuy, setGoodGuy }) (HeroContainer);


