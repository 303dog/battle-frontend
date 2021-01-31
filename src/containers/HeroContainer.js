import React, { Component } from "react";
import GoodHeros from "../components/goodHeros";
import EvilHeros from "../components/evilHeros";
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import {setHeros} from '../redux/actionCreator';
import {setGood} from '../redux/actionCreator';
import {setEvil} from '../redux/actionCreator';

class HeroContainer extends Component {
  state = {
    goodGuy: null,
    evilGuy: null,

  };

  componentDidMount() {
    this.props.setHeros();
  }

  selectGoodGuy = (hero) => {
      this.setState({ goodGuy: hero });
  };

  selectEvilGuy = (hero) => {
    this.setState({ evilGuy: hero });
  };

  
  renderHeros = () => {
    return (
      !this.state.goodGuy ? (
      <GoodHeros
        goodGuys={this.props.heros.filter(
          (hero) => hero.alignment === "good"
        )}
        selectGoodGuy={this.selectGoodGuy}
      />
     ) : (
       <>
      <EvilHeros 
        evilGuys={this.props.heros.filter(
          (hero) => hero.alignment === "bad"
        )}
        selectEvilGuy={this.selectEvilGuy}
      />
      </>
      )
    )
  }



  renderGame = () => {
    return (
        <div className="main-container">
          <h1>Battle of the Multiverse</h1>
          {this.state.evilGuy ? <p>ready to fight</p> : this.renderHeros()}
        </div>
    )
  }


  render() {
    return (
      <>
          {this.renderGame()}
          <Link to={"/BattleContainer"}>Battle!</Link>
               
      </>
    );
  }
}

const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,
});



export default connect(mapStateToProps, { setHeros, setEvil, setGood }) (HeroContainer);


