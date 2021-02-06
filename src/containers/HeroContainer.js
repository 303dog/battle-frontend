import React, { Component } from "react";
import GoodHeros from "../components/goodHeros";
import EvilHeros from "../components/evilHeros";
import { connect } from "react-redux";
import { setHeros } from "../redux/actionCreator";
import { setGoodGuy, setEvilGuy } from "../redux/actionCreator";


class HeroContainer extends Component {
  componentDidMount() {
    this.props.setHeros();
  }

 
  renderHeros = () => {
    return !this.props.goodGuy ? (
      <GoodHeros
        goodGuys={this.props.heros.filter((hero) => hero.alignment === "good")}
        selectGoodGuy={this.props.setGoodGuy}
      />
    ) : (
      <>
        <EvilHeros
          evilGuys={this.props.heros.filter((hero) => hero.alignment === "bad")}
          selectEvilGuy={this.props.setEvilGuy}
        />
      </>
    );
  };

  renderGame = () => {
    return this.props.evilGuy
      ? this.props.history.push("/battle")
      : this.renderHeros();
  };

  render() {
    return <>{this.renderGame()}</>;
  }
}

const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,
});

export default connect(mapStateToProps, { setHeros, setEvilGuy, setGoodGuy })(
  HeroContainer
);
