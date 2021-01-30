import React, { Component } from "react";
import GoodHeros from "../components/goodHeros";
import EvilHeros from "../components/evilHeros";
//import { store } from "../store";
//import { Link } from "react-router-dom";
//import { connect } from 'react-redux';

class HeroContainer extends Component {
  state = {
    heros: [],
    goodGuy: null,
    badGuy: null,
    readyForBattle: [],
    currentSelection: null,
  };

  componentDidMount() {
    const fetchHeros = () => {
      return fetch("http://localhost:3001/api/v1/heros")
        .then((res) => res.json())
        .then((data) => {
          const heros = data;
          this.setState({ heros });
        });
    };
    setTimeout(fetchHeros, 2000);
  }

  selectHero = (event) => {
    const currentSelection = event.target.value;
    fetch(`http://localhost:3001/api/v1/heros/${currentSelection}`)
      .then((res) => res.json())
      .then((data) => {
        const readyForBattle = data;
        this.setState({
          readyForBattle,
          currentSelection,
        });
        console.log(this.state);
      });
  };

  handleButtonClicked = (event) => {
    const currentSelection = event.target.value;
    return (
      (
        <div className="champ" onClick={currentSelection.handleOnChange}>
          Your champion {currentSelection.xsImg}
        </div>
      ),
      this.setState({
        currentSelection: event.target.options,
        message: `You have picked ${currentSelection.name} as your champion!`,
      })
    );

    debugger;
  };

  renderHeros = () => {
    return this.state.heros.map((hero) => {
      return (
        <>
          <div className="hero-container">
            <img src={hero.smImg} alt="hero" />
            <details>
              <summary>Wanna know more about... {hero.name}</summary>
              <ul>
                <li>
                  <h3>AKA: {hero.aka}</h3>
                </li>
                <li>
                  <h3>Associates with: {hero.connections}</h3>
                </li>
                <li>
                  <h3>
                    Fights for <i>{hero.alignment}</i> of all mankind!
                  </h3>
                </li>
                <button
                  value={hero.id}
                  onClick={this.selectHero}
                  options={hero.id}
                >
                  Fight
                </button>
              </ul>
            </details>
          </div>
        </>
      );
    });
  };

  selectGoodGuy = (hero) => {
    this.setState({ goodGuy: hero });
  };

  selectEvilGuy = (hero) => {
    this.setState({ evilGuy: hero });
  };

  renderHeros = () => {
    return (
      !this.state.goodGuy ? 
      
      <GoodHeros
        goodGuys={this.state.heros.filter(
          (hero) => hero.alignment === "good"
        )}
        selectGoodGuy={this.selectGoodGuy}
      />
      : 
      <p>select a bad guy</p>
  
    
    )
  }



  render() {
    return (
      <>
        <div className="main-container">
          <h1>Battle of the Multiverse</h1>
          {this.state.badGuy ? <p>ready to fight</p> : this.renderHeros()}
        </div>
       
      </>
    );
  }
}

export default HeroContainer;
