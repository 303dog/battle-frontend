import React, { Component } from "react";
import { connect } from "react-redux";
import { setHeros, setGoodGuy, setEvilGuy } from "../actions/actionCreator";
import GoodHeros from "../components/goodHeros";
import EvilHeros from "../components/evilHeros";




class Heros extends Component {
 


  componentDidMount() {
    this.props.setHeros()    
  }
    
  
 renderHeros = () => {
   return !this.props.goodGuy ? (
     <>
    <GoodHeros
    goodGuys={this.props.heros.filter((hero) => hero.alignment === "good")}
    selectGoodGuy={this.props.setGoodGuy}
    />
     </>
     ) : (
    <>
    <EvilHeros
      evilGuys={this.props.heros.filter((hero) => hero.alignment === "bad")}
      selectEvilGuy={this.props.setEvilGuy}
    />
     </>
   );
 };

render() {  
  return (
    <>
    {this.renderHeros()}
    </>
  )
}

}

const mapStateToProps = (state) => ({
  heros: state.heros,
  goodGuy: state.goodGuy,
  evilGuy: state.evilGuy,

});

export default connect(mapStateToProps, { setHeros, setEvilGuy, setGoodGuy })(Heros);
