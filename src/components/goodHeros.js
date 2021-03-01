import React from "react";




function GoodHeros(props) {
  return (
    <div className="box">
      <h1>Heros</h1>
      <p>Choose your Hero!</p>
        <div className="heros">
        <div className="row">
      {props.goodGuys.map((goodGuy) => {
        return (
          <>
          <div className="column">
            <p></p>
            <div className="card">
            <h3>{goodGuy.name}</h3>
            <img src={goodGuy.smImg} alt="googuy"/>
            <button onClick={() => props.selectGoodGuy(goodGuy)}><p>SELECT</p>Record wins: <b>{goodGuy.wins}</b></button>
          </div>
          </div>
          </>
        );
      })}
    </div>
    </div>
    </div>
  ); 
}
export default GoodHeros;
